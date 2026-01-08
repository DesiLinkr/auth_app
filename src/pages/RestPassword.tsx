import  { useEffect, useState, useTransition } from "react";
import { AuthService } from "../api/auth.service";
import {  useParams } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "../components/ui/card";

import { TypographyH2, TypographySmall } from "../components/Typography";
import { toast } from "sonner";
import { ResetPasswordForm } from "../components/ResetPasswordForm";

import Loading from "../components/loading";

const ResetPassword = () => {


  
  const authService = new AuthService();
  let token:string|null = null;
  useEffect(() => {
    
    const run = async () => {
      try {
        
        const params:any = useParams();
        token = params.token
      
    if (!token ) {
      
          return;
        }

        await authService.verifyResetToken(token);

        window.location.replace("/home");

     
      } catch (error: any) {
    
        window.location.replace("/");
      }
    };
     run();
  
  }, [])
  
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [isPending, startTransition] = useTransition();




  const onChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    startTransition(async () => {
      try {
await authService.resetPassword(token as string,input.password);
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
          <CardTitle className="text-2xl pb-2">Reset your password</CardTitle>
          <CardDescription className="pb-2">
            Enter a new password for your DesiLinkr account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ResetPasswordForm
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

        <ResetPasswordForm
          input={input}
          
          onChange={onChange}
          onSubmit={submitHandler}
          isPending={isPending}
        />
      </div>
      </div >
    </div>

  );
};

export default ResetPassword;
