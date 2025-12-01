import React, { useRef, useState, useTransition } from 'react'
import Socialbtn from './socialbtn'
import { GoogleLogin } from '@react-oauth/google'
import { resolveAsset } from '@/utils/resolveAsset';
import { toast } from "sonner"

import { AuthService } from '../api/auth.service'

import http from '../api/http'

const github = resolveAsset("/github.png");
const linkedin = resolveAsset("/linkedin.png");
const google = resolveAsset("/google-logo-icon.png");
const Sociallogins = () => {

    const authService =new AuthService()
    const googleButton = useRef <HTMLDivElement | null>(null)
 
    const handleLinkedInLogin = () => {
      const scope = "openid profile email";
  
      const authUrl =
        "https://www.linkedin.com/oauth/v2/authorization" +
        `?response_type=code` +
        `&client_id=${encodeURIComponent(process.env.linkedin_clientId as string)}` +
        `&redirect_uri=${encodeURIComponent(process.env.linkedin_redirectUri as string)}` +
        `&scope=${encodeURIComponent(scope)}`;
  
      window.location.href = authUrl;
    };

    const handleGitHubLogin = () => {
      const scope = "read:user user:email";
  
      const authUrl =
        "https://github.com/login/oauth/authorize" +
        `?client_id=${process.env.GITHUB_CLIENT_ID as string}` +
        `&redirect_uri=${encodeURIComponent(process.env.GITHUB_REDIRECT_UR as string)}` +
        `&scope=${encodeURIComponent(scope)}`;
  
        window.location.href = authUrl;
  
    };
    const googleHandler = async(tokenResponse:any)=>{
        try {
          const res = await authService.google(tokenResponse.credential)
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
    <>
    <div  className="hidden" ref={googleButton}>
    <GoogleLogin    onSuccess={googleHandler}
          onError={() => console.log("Login Failed")}
         ></GoogleLogin>
          </div>
    
          <div className='lg:flex justify-between  w-full'>
    
    <Socialbtn Handler ={googlebtnHandler} logo={google}   provider="Google"></Socialbtn>
    <Socialbtn Handler ={handleGitHubLogin} logo={github}   provider="Github"></Socialbtn>
    <Socialbtn Handler ={handleLinkedInLogin} logo={linkedin} provider="Linkedin"></Socialbtn>
    
    </div>
    </>
  )
}

export default Sociallogins