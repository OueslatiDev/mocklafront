import { FunctionComponent, useCallback, useState } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import SignInWithGoogleContainer from "../components/SignInWithGoogleContainer";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login1 from "../components/Login1";
import CopyrightPitchini from "../components/CopyrightPitchini";
import FrameComponent from "../components/FrameComponent";
import { validateEmail, validateNotEmpty } from "../components/ValidateFunction";

const LoginRecruiter: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState(0);

  const navigate = useNavigate();
  const handleLogin = useCallback(async () => {
    console.log("Login clicked");
    // Validation des champs d'entrée
    if (!validateEmail(email)) {
      alert("Veuillez saisir une adresse e-mail valide.");
      return;
    }
    if (!validateNotEmpty(password)) {
      alert("Veuillez saisir un mot de passe.");
      return;
    }

    // Envoi de la requête au backend pour l'authentification
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {

        const responseData = await response.json();
        const { token, id, role } = responseData; // Supposant que le backend renvoie un objet avec les clés "token" et "id"
        if (role == "client") {
          alert(`Token: ${token}, ID: ${id}`);
          // Redirection vers la page appropriée après la connexion réussie
          // navigate("/forget-password");
        } else alert(`there is no recruiter with this email`);
      } else {
        // Gestion des erreurs en cas d'échec de la connexion
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
    }
    setEmail("")
    setPassword("")
  }, [email, password, navigate]);

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



  const onFreelancerTextClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/login-freelancer");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forget-password");
  }, [navigate]);
  const isRecruiterLogin = location.pathname === "/login-recruiter";


  // Définition des styles en fonction de la condition
  const propBorder = isRecruiterLogin ? "3px solid #2f80ed" : "3px solid #000"; // Utilisation d'une bordure bleue pour le login recruiter, et une bordure noire par défaut
  const propColor = isRecruiterLogin ? "#2f80ed" : "#000"; // Utilisation d'une couleur bleue pour le login recruiter, et une couleur noire par défaut
  const propBorderr = isRecruiterLogin ? "3px solid #000" : "3px solid #2f80ed";
  const propColorr = isRecruiterLogin ? "#000" : "#2f80ed";
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[39px] box-border gap-[72px] tracking-[normal] mq450:gap-[18px_72px] mq975:gap-[36px_72px]">
      <Navbar
        frameHeaderAlignSelf="stretch"
        frameHeaderFlex="unset"
        onLogoPitchini1Click={onLogoPitchini1Click}
        onContactTextClick={onContactTextClick}
        onLoginTextClick={onLoginTextClick}
        onButtonContainerClick={onButtonContainerClick}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[972px] flex flex-col items-end justify-start gap-[77px] max-w-full text-center text-66xl text-grey1 font-titre-grey mq700:gap-[19px_77px] mq975:gap-[38px_77px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
              <Login1
                title="Login the Pitchini"
                description="Are you using PITCHINI as a Recruiter or a Freelancer ?"
                imageUrl="/login02-converti02-1@2x.png"
              />
              <FrameComponent
                propBorder="3px solid #2f80ed"
                propColor="#2f80ed"

                onRectangle2Click={onRectangleClick}
                onFreelacerTextClick={onFreelancerTextClick}
              />
            </div>
          </div>
          <CopyrightPitchini email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} errorMessage={errorMessage}
            setErrorMessage={setErrorMessage} number={number} setNumber={setNumber} />
        </section>
      </main>
    </div>
  );
};

export default LoginRecruiter;
