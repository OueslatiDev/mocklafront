import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login1 from "../components/Login1";
import Footer from "../components/Footer";
import { validateEmail, validateNotEmpty, validatePassword } from "../components/ValidateFunction";
import InputComponent from "../components/Input";

const ResetPassword: FunctionComponent = () => {
  const { email, token } = useParams();
  const [newPassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState(0);
  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();

  const onLogoPitchini1Click = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Page " to the project
  }, []);

  const onLoginTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Joint Freelancer  p1" to the project
  }, []);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const onConfirmClick = useCallback(async () => {
    setErrorMessage("")
    setNumber(0)
    if (!validateNotEmpty(newPassword)) {
      setNumber(1)
      setErrorMessage("password is required");
      return;
    } else if (!validatePassword(newPassword)) {
      setNumber(2)
      setErrorMessage("Veuillez saisir un mot de passe  valide  .");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/reset-password/", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({email,token,newPassword }),

      });
      console.log(email, token, newPassword)
      const data = await response.json();

      if (response.ok) {
       
        // navigate("/"); // Rediriger vers une autre page après avoir envoyé l'email avec succès
        setErrorMessage(data.message); // Afficher le message d'erreur
      }
    } catch (error) {
      console.error("Error requesting password reset:", error);
      setErrorMessage("Failed to request password reset");
    }
    setPassword("")
  }, [newPassword, navigate]);

  return (
    <div className="w-full h-[1589px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[6629.7px] tracking-[normal] text-left text-base-4 text-gray-3 font-titre-grey mq450:gap-[1657px_6629.7px] mq1000:gap-[3315px_6629.7px]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[76px] shrink-0 [debug_commit:f6aba90] mq450:gap-[19px_76px] mq1000:gap-[38px_76px]">
        <Navbar
          frameHeaderAlignSelf="stretch"
          frameHeaderFlex="unset"
          onLogoPitchini1Click={onLogoPitchini1Click}
          onContactTextClick={onContactTextClick}
          onLoginTextClick={onLoginTextClick}
          onButtonContainerClick={onButtonContainerClick}
        />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-66xl text-grey1 font-titre-grey">
          <div className="w-[972px] flex flex-col items-start justify-start gap-[108px] max-w-full mq725:gap-[27px_108px] mq1000:gap-[54px_108px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start gap-[17px] max-w-full">
                <Login1
                  title="Reset Password"
                  description=" To reset your password at PITCHINI, please enter your new password"
                  imageUrl="/b01-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[54px] box-border gap-[54px] max-w-full mq725:gap-[27px_54px]">
                <div className="self-stretch h-[99px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-sm bg-silver box-border w-full h-full border-[2px] border-solid border-grey hover:box-border hover:border-[2px] hover:border-solid hover:border-blue active:box-border active:border-[2px] active:border-solid active:border-blue" />
                  <InputComponent

                    type="text"
                    placeholder="Enter your password"
                    value={newPassword}
                    handleInputChange={handlePasswordChange}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    number={number}
                    setNumber={setNumber}
                    setHasError={setHasError}
                    hasError={number === 1 || number === 2}
                  />
                  {errorMessage === "Password reset successfully" && (

                    <div className="text-green-500 " style={{ fontSize: '30px' }}>{errorMessage}</div>)}
                </div>

                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                  <button onClick={onConfirmClick} className="cursor-pointer [border:none] p-0 bg-[transparent] h-[79px] w-[639px] relative max-w-full">
                    <div
                      className="absolute top-[0px] left-[0px] rounded-md bg-white shadow-[0px_4px_12px_-1px_rgba(0,_0,_0,_0.25)] box-border w-full h-full cursor-pointer border-[3px] border-solid border-dgrad-color"

                    />
                    <div
                      className="absolute top-[27px] left-[163px] text-5xl tracking-[-0.01em] leading-[29.6px] font-medium font-montserrat text-orange text-center flex items-center justify-center w-[313.4px] h-[25.5px] cursor-pointer z-[1] mq450:text-lgi"

                    >
                      Recover Password
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </main>

    </div>
  );
};

export default ResetPassword;
