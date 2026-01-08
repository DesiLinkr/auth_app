
import React, { useRef, useState, useTransition } from "react";

import { toast } from "sonner";
import { AuthService } from "../api/auth.service";
import Layout from "../components/layout";



const SignUp = () => {
  const authService = new AuthService();
  
  const [isPending, startTransition] = useTransition();
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e:any)=>{

setinput((prev)=>({    ...prev,
  [e.target.name]: e.target.value, })
  )}
  const submitHandler = (e: any) => {
    
    e.preventDefault(); // stop reload
  
    startTransition(async () => {
      try {
        await authService.register(input.email, input.password);
        window.location.replace("/home");
      } catch (error: any) {
        console.log(error)
        toast.error(error.message);
      }
    });
  };
  return (
  
      <Layout
      formInfo={{
        title: "Create your account",
        submitHandler,
        inputHandler,
        inputValues:input,
        transitionState:isPending,
        buttonText: "Create free account",
        showForgotPassword:false
      }}
      authInfo={{
        text: "Already have an account?",
        label: "Log in",
        href: `/auth/sign_in`,
      }}
      banner={{
        image: "/banner.png",
        size: { height: 270, width: 270 },
        text: "Empower your links and QR codes the Desi way with DesiLinkr.",
        textWidth: "w-[350px]",
        topPadding: "pt-44",
      }}
    ></Layout>
  );
};

export default SignUp;
