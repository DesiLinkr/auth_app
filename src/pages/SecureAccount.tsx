import React, { useEffect, useState, useTransition } from 'react'
import { ResetPasswordForm } from '../components/ResetPasswordForm'
import { TypographyH2, TypographySmall } from '../components/Typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

import { toast } from 'sonner';
import { SecureAccountForm } from '../components/SecureAccountForm';
import {  useParams } from 'react-router-dom';
import { AuthService } from '../api/auth.service';

const SecureAccount = () => {


  
    const authService = new AuthService();
      const [isPending, startTransition] = useTransition();
      let token:string|null = null;
  useEffect(() => {
    
    const run = async () => {
      try {
        
        const params:any = useParams();
        token = params.token
      
    if (!token ) {
      
          return;
        }

        await authService.verifySecureToken(token);

  
     
      } catch (error: any) {
        window.location.replace("/");
      }
    };
     run();
  
  }, [])
  
    
     const [input, setInput] = useState({
      newPassword: "",
        confirmPassword: "",
        oldPassword: "",
      });
      const onChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
    
      const submitHandler = (e: any) => {
        e.preventDefault();
    
        if (input.newPassword !== input.confirmPassword) {
          return toast.error("Passwords do not match");
        }
    
        startTransition(async () => {
          try {
            await authService.secureAccount(token as string,input.oldPassword,input.newPassword)
            console.log(input);
            
           toast.success("Password reset successfully!");
          } catch (error: any) {
            toast.error(error.message);
          }
        });
      };
  return (
    <div className="md:bg-gray-100  h-screen grid justify-center items-center ">
  <div >
  <div className="w-full justify-center flex items-center">
    <img src="/shortlogo.png" width={"100%"} height={"100%"} className='relative  pb-6  w-[18rem]'></img>
    </div>

      {/* Desktop Card */}
      <Card className="hidden md:w-[25rem] xl:w-[26rem] md:block">
        <CardHeader>
          <CardTitle className="text-2xl pb-2">    Secure your account</CardTitle>
          <CardDescription className="pb-2">
          Follow this step to secure your DesiLinkr account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SecureAccountForm
            input={input}
            onChange={onChange}
            onSubmit={submitHandler}
            isPending={isPending}
          />
        </CardContent>
      </Card>

      {/* Mobile */}
      <div className="md:hidden px-8 max-w-[30rem]">
        <TypographyH2 text="Reset your password" className="pb-3" />
        <TypographySmall
          text="Enter a new password for your DesiLinkr account"
          className=" text-gray-500"
        />

        <SecureAccountForm
          input={input}
          
          onChange={onChange}
          onSubmit={submitHandler}
          isPending={isPending}
        />
      </div>
      </div >
    </div>
  )
}

export default SecureAccount