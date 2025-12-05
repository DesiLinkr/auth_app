
import { TypographyH2, TypographySmall } from "./Typography";
import { Separator } from "./ui/separator";
import Sociallogins from "./sociallogins";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FormInfo {
  submitHandler:(e: any) => void;
  inputHandler:(e: any) => void;
  title:string
  buttonText:string
  inputValues:{
    email:string,
    password:string,
  }
  transitionState:boolean
  showForgotPassword:boolean
}

interface AuthInfo {
  text: string;
  href: string;
  label: string;
}
interface BannerInfo{
  image: string;
  size: {
    width: number;
    height: number;
  };
  text: string;
  textWidth: string;
  topPadding: string;
}
interface LayoutProps {
  formInfo: FormInfo;
  authInfo: AuthInfo;
  banner: BannerInfo;
}
const Layout = ({formInfo,banner,authInfo}:LayoutProps) => {
 
  return (

   
    <div className=' overflow-hidden h-screen'>

    <img src="/logo.png" width={200} height={200} className=' lg:hidden relative bottom-[40px] left-[13px] mb-4 '></img>
   
   <div className='flex justify-evenly w-full  h-auto' >
     <div >
     <img src="/logo.png" width={200} height={200} className='hidden lg:block relative bottom-[40px] left-[13px] mb-4 '></img>
   
   <div className=' flex justify-center    lg:w-[55vw] h-full '>
   <div className=' relative  bottom-[60px]  '>
   <TypographyH2 text={formInfo.title} className='min-w-[300px]'  />
   
<div className="text-sm mb-3 lg:mb-6 mt-7 text-gray-800">
  <span>{authInfo.text} </span>
  <a
    onClick={()=>        window.location.replace(authInfo.href)}
    className="text-red-500 hover:underline"
  >
    {authInfo.label}
  </a>
</div>
   <div className='flex flex-col  md:flex-col-reverse'>
  
   
   <form onSubmit={formInfo.submitHandler}>
     <div className="grid w-full max-w-sm items-center gap-2">
           <Label htmlFor="email" className='font-[552] text-xs  text-gray-700'>Email</Label>
           <Input type="email" className='h-10' name="email"  value={formInfo.inputValues.email} onChange={formInfo.inputHandler} required placeholder="Email" />
         </div>
         <div className="grid  max-w-sm items-center gap-2 mt-3">
           <Label htmlFor="password" className='font-semibold  text-xs text-gray-700'>Password</Label>
           <Input type="password"   pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
           title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
 
 name="password" value={formInfo.inputValues.password} onChange={formInfo.inputHandler}  className='h-10'  required  placeholder="Password" />
         </div>
         {formInfo.showForgotPassword &&
              <div className='w-full  text-right mt-3'>
        <a       onClick={()=> window.location.replace("/auth/forgot_password")} className="text-red-500 hover:underline text-sm  ">Forgot your password?</a>
        </div>
         }
         <Button className={`bg-red-500 w-full ${!formInfo.showForgotPassword?"mt-7":"mt-4"} rounded-sm   text-sm`} type="submit" variant={'destructive'} disabled={formInfo.transitionState}>{formInfo.buttonText}</Button>
        
         </form>
   
       <div className='flex flex-col  md:flex-col-reverse'>
   <div className='mt-6'>
   
       <Separator />
       <div className='justify-center flex'>
   <TypographySmall text='Or' className='relative bottom-2 bg-white   w-8 justify-center flex'></TypographySmall>
   </div>
   </div>
 
<Sociallogins></Sociallogins>
   </div>
   </div>
   </div>
   
   </div>
   
   </div>
   
   
   <div className={`lg:w-[45vw] bg-[#F0D1D1]  hidden lg:flex flex-col   h-auto  ${banner.topPadding}   items-center min-h-screen` }>
   
   <img src={banner.image}        width={banner.size.width}
        height={banner.size.height} className='mb-8'></img>
   

<p className={`text-sm ${banner.textWidth} font-bold`}>{banner.text}</p>
      </div>
   </div>
       </div>
      


  )
}

export default Layout