import React, { useState, useTransition } from 'react'

import Layout from '../components/layout'
import { AuthService } from '../api/auth.service'
import { toast } from 'sonner'


const SignIn = () => {

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
          await authService.login(input.email, input.password);
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
        title: "Log in and start sharing",
        submitHandler,
        inputHandler,
        inputValues:input,
        transitionState:isPending,
        buttonText: "Log in",
        showForgotPassword:true,
      }}
      authInfo={{
        text: "Don't have an account?",
        label: "Sign up",
        href: `/auth/sign_up`,
      }}
      banner={{
        image: "/banner2.png",
        size: { height: 470, width: 470 },
        text: "Track your links and QR Codes with Desi swag  as effortlessly as you create them.",
        textWidth: "w-[450px]",
        topPadding: "pt-30",
      }}
    ></Layout>
    
 
  )
}

export default SignIn