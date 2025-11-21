import React from 'react'
import {TypographyH2, TypographyP, TypographySmall} from './components/Typography'
import { Input } from "@/src/components/ui/input"
import { Separator } from "@/src/components/ui/separator"

import {Label} from '@/src/components/ui/label'
import {Button} from '@/src/components/ui/button'
import { resolveAsset } from '@/utils/resolveAsset'

const logo = resolveAsset("/logo.png");


const google = resolveAsset("/google-logo-icon.png");
const banner = resolveAsset("/banner2.png");
const apple = resolveAsset("/apple.png");

const SignIn = () => {
  return (
    <div className="overflow-hidden  h-auto ">
    <div className='h-full '>
    <img src={logo} width={200} height={200} className=' lg:hidden relative bottom-[40px] left-[13px] mb-4 '></img>
   
   <div className='flex justify-evenly w-full  h-auto' >
     <div className=' '>
     <img src={logo} width={200} height={200} className='hidden lg:block relative bottom-[40px] left-[13px] mb-4 '></img>
   
   <div className=' flex justify-center    lg:w-[55vw] h-full '>
   <div className=' relative  bottom-[60px]  '>
   <TypographyH2 text='Log in and start sharing' className=''  />
   <div className="text-sm  mb-6 mt-7 text-gray-800 ">
             <span>Don't have an account? </span>
             <a href={`${process.env.SHELL_APP}/sign_up`} className="text-red-500 hover:underline">Sign up</a>
            
           </div>
   <div className='flex flex-col  md:flex-col-reverse'>
   <form>
   <div className="grid w-full max-w-sm items-center gap-2">
         <Label htmlFor="email" className='font-[552] text-xs  text-gray-700'>Email</Label>
         <Input type="email" className='h-10' required id="email" placeholder="Email" />
       </div>
       <div className="grid  max-w-sm items-center gap-2 mt-3">
         <Label htmlFor="password" className='font-semibold  text-xs text-gray-700'>Password</Label>
         <Input type="password" className='h-10' minLength={8} required id="email" placeholder="Password" />
       </div>
       <div className='w-full  text-right mt-3'>
       <a href={`${process.env.SHELL_APP}/forgot_password`} className="text-red-500 hover:underline text-sm  ">Forgot your password?</a>
       </div>
       <Button className='bg-red-500 w-full mt-4 rounded-sm   text-sm' type="submit" variant={'destructive'} >Create free account</Button>
      
       </form>
   
   
   
   
       <div className='flex flex-col  md:flex-col-reverse'>
   <div className='mt-6'>
   
       <Separator />
       <div className='justify-center flex'>
   <TypographySmall text='Or' className='relative bottom-2 bg-white   w-8 justify-center flex'></TypographySmall>
   </div>
   </div>
   <div className='flex  flex-col justify-between h-[5.5rem]'>
   <div className=' relative  '>
   <Button variant="outline" className='w-full rounded-sm text-sm'>Continue with Google</Button>
 
   <img src={google} className='absolute top-2.5 left-16  ' width={16} height={16}></img>
   </div>


   <div className=' relative  '>
<img src={apple} className='absolute top-2 left-16  ' width={15} height={15}></img>
   <Button variant="outline" className='w-full rounded-sm text-sm'>Continue with Apple</Button>
   </div>

 
   
   </div>
   </div>
   </div>
   </div>
   
   </div>
   
   </div>
   
   
   <div className='lg:w-[45vw] bg-[#F0D1D1]  hidden lg:flex flex-col   h-auto  pt-30   items-center min-h-screen' >
   
     <img src={banner} width={470} height={470} className=' grid justify-center mb-8'></img>
     <p className='text-md w-[450px] font-bold'>Track your links and QR Codes with Desi swag  as effortlessly as you create them.</p>
   </div>
   </div>
       </div>
       </div>
  )
}

export default SignIn