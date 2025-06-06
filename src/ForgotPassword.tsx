import { TypographyH2 } from '@/components/Typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { resolveAsset } from '@/utils/resolveAsset'

const logo = resolveAsset("/logo.png");


const ForgotPassword = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center'>
        <div>
      <img src={logo} width={300} height={100} className='relative bottom-14'></img>
      <Card className=' w-[22rem]  md:w-[25rem]  relative bottom-26'>
  <CardHeader>
    <CardTitle className='text-2xl pb-2'>Forgot your password?</CardTitle>
    <CardDescription>It happens to the best of us. Enter your email or username to request a password reset link.</CardDescription>
  </CardHeader>
  <CardContent>
  <Label htmlFor="email" className='font-[552] text-xs  text-gray-700'>Email</Label>
         <Input type="email" className='h-10 mt-3' required id="email" placeholder="Email" />
       
  </CardContent>
  <CardFooter>
  <Button className='bg-red-500 w-full mt-4 rounded-sm   text-sm' type="submit" variant={'destructive'} >Reset</Button>
   
  </CardFooter>
</Card>

      
      <div className="grid w-full max-w-sm items-center gap-2 ">
        
       </div>
      </div>
    </div>
  )
}

export default ForgotPassword
