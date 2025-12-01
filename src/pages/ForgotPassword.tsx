import { TypographyH2, TypographyP, TypographySmall } from '@/src/components/Typography'
import { FaCircleCheck } from "react-icons/fa6";

import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"

import { resolveAsset } from '@/utils/resolveAsset'
import { useState, useTransition } from 'react'
import { AuthService } from '../api/auth.service'
import { toast } from 'sonner'
const logo = resolveAsset("/shortlogo.png");


const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const authService = new AuthService();
  const [isPending, startTransition] = useTransition();
  
  const [emailSent, setemailSent] = useState(false)
  const submitHandler = (e: any) => {
  
    e.preventDefault(); 
  
    startTransition(async () => {
      try {
        await authService.forgotPassword(email);
        setemailSent(true)
      } catch (error: any) {
        console.log(error)
     
        toast.error(error.message);
      }
    });
  };
  return (
     <div className='md:bg-gray-100 h-screen flex justify-center items-center '>
  
        <div>
     <div className='flex justify-center items-center  ' > <img src={logo} width={"100%"} height={"100%"} className='relative md:pb-44 pb-20 pt-5 md:top-11 w-[18rem]'></img>
     </div>
     {emailSent ? <> <Card className=' hidden md:block  md:w-[25rem] xl:w-[26rem]  relative bottom-26'>
      <CardHeader>
    <CardTitle className='text-2xl pb-2 flex  items-center '  ><FaCircleCheck color='#4C7251' className='pr-2' />Check your inbox</CardTitle>
    <CardDescription className='pb-5' >If we find a matching account, we'll send you an email with password recovery instructions.</CardDescription>
    <CardDescription>
  Didn't receive an email? Check your spam folder or <span className="text-red-500 underline" onClick={()=>{setemailSent(false)
    setemail("")
   }}>try another email address.</span>
  </CardDescription>
  </CardHeader>

      </Card>
      <div className='md:hidden  px-8 max-w-[27rem] relative bottom-10' >

      <TypographyH2 text="Check your inbox" className='pb-3'/>
    <TypographySmall text ="If we find a matching account, we'll send you an email with password recovery instructions."  className='pb-5 text-gray-500'/>
   <br></br>
   <br></br>
  
   
    <TypographySmall text ="Didn't receive an email? Check your spam folder or "  className='pb-5 text-gray-500'/>
    
    <span className="text-red-500 underline" onClick={()=>{setemailSent(false)
    setemail("")
   }}>try another email address.</span>
      </div>
      </>
      :  
      <>
     <Card className='  hidden md:w-[25rem] xl:w-[26rem] md:block relative bottom-26'>
   
  <CardHeader>
    <CardTitle className='text-2xl pb-2'>Forgot your password?</CardTitle>
    <CardDescription >It happens to the best of us. Enter your email or username to request a password reset link.</CardDescription>
  </CardHeader>
  <form onSubmit={submitHandler}>
  <CardContent>
  <Label htmlFor="email" className='font-[552] text-xs  text-gray-700'>Email</Label>
         <Input type="email" className='h-10 mt-3' value={email} onChange={(e)=>{setemail(e.target.value)}} required id="email" placeholder="Email" />
       
  </CardContent>
  <CardFooter>
  <Button className='bg-red-500 w-full mt-4 rounded-sm   text-sm' disabled={isPending} type="submit" variant={'destructive'} >Reset</Button>
   
  </CardFooter>
  </form>
</Card>
<div className='md:hidden  px-8 max-w-[30rem] relative bottom-10'>
    <TypographyH2 text="Forgot your password" className='pb-3'/>
    <TypographySmall text ="It happens to the best of us. Enter your email or username to request a password reset link."  className='pb-5 text-gray-500'/>
   
  <form onSubmit={submitHandler}>

  <Label htmlFor="email" className='font-[552] text-xs  text-gray-700'>Email</Label>
         <Input type="email" className='h-10 mt-3' value={email} onChange={(e)=>{setemail(e.target.value)}} required id="email" placeholder="Email" />
       
 
  <Button className='bg-red-500 w-full mt-4 rounded-sm   text-sm' disabled={isPending} type="submit" variant={'destructive'} >Reset</Button>
   
  </form>
</div>
</>
}
      
      <div className="grid w-full max-w-sm items-center gap-2 ">
        
       </div>
      </div>
    </div>
  )
}

export default ForgotPassword
