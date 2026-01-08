import React, { useRef, useState, useTransition } from 'react'
import Socialbtn from './socialbtn'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

import { toast } from "sonner"

import { AuthService } from '../api/auth.service'

import http from '../api/http'

const Sociallogins = () => {

    const authService =new AuthService()
    const googleButton = useRef <HTMLDivElement | null>(null)
 
    const handleLinkedInLogin = () => {
      const scope = "openid profile email";
  
      const authUrl =
        "https://www.linkedin.com/oauth/v2/authorization" +
        `?response_type=code` +
        `&client_id=${encodeURIComponent(process.env.LINKEDIN_CLIENT_ID as string)}` +
        `&redirect_uri=${encodeURIComponent(process.env.LINKEDIN_REDIRECT_URI as string)}` +
        `&scope=${encodeURIComponent(scope)}`;
  
      window.location.href = authUrl;
    };

    const handleGitHubLogin = () => {
      const scope = "read:user user:email";
  
      const authUrl =
        "https://github.com/login/oauth/authorize" +
        `?client_id=${process.env.GITHUB_CLIENT_ID as string}` +
        `&redirect_uri=${encodeURIComponent(process.env.GITHUB_REDIRECT_URI as string)}` +
        `&scope=${encodeURIComponent(scope)}`;
  
        window.location.href = authUrl;
  
    };
    const googleHandler = async(tokenResponse:any)=>{
        try {
         await authService.google(tokenResponse.credential)
          window.location.replace("/home");
          
        } catch (error:any) {
         toast.error(error.message) 
        }
      
      
      }  
      const googlebtnHandler  = ()=>{
      
        if (googleButton.current) {
         let Btn:any = googleButton.current.querySelector("div[role=button], iframe")
         Btn.click()
        }
        
        }
      
       
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
    
    <div  className="hidden" ref={googleButton}>
    <GoogleLogin    onSuccess={googleHandler}
          onError={() => console.log("Login Failed")}
         ></GoogleLogin>
          </div>
    
          <div className='lg:flex justify-between  w-full'>
    
    <Socialbtn Handler ={googlebtnHandler} logo="/google-logo-icon.png"   provider="Google"></Socialbtn>
    <Socialbtn Handler ={handleGitHubLogin} logo="/github.png"   provider="Github"></Socialbtn>
    <Socialbtn Handler ={handleLinkedInLogin} logo="/linkedin.png" provider="Linkedin"></Socialbtn>
    
    </div>
    </GoogleOAuthProvider>
  )
}

export default Sociallogins