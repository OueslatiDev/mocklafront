import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LoginFreelancer from "./pages/LoginFreelancer";
import LoginRecruiter from "./pages/LoginRecruiter";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SearchJob from "./pages/SearchJob";
import Discussion from "./pages/Discussion";
import SignUpFreelancer from "./pages/SignUpFreelancer";
import SignUpRecruter from "./pages/SignUpRecruter";
import SignUpInterview from "./pages/SignUpInterview";
import PostProject from "./pages/PostProject";


function App() {
 

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUpFreelancer" element={<SignUpFreelancer />} />
      <Route path="/SignUpRecruter" element={<SignUpRecruter />} />
      <Route path="/signupinterview" element={<SignUpInterview/>} />
      <Route path="/login-freelancer" element={<LoginFreelancer />} />
      <Route path="/postProject" element={<PostProject />} />
      <Route path="/login-recruiter" element={<LoginRecruiter />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:email/:token" element={<ResetPassword />} />
      <Route path="/searchJob/:id" element={<SearchJob />} />
      <Route path="/discussion/:id" element={<Discussion />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
