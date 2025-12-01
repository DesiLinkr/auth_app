import React from 'react'
import { Progress } from './ui/progress' 
import { resolveAsset } from '@/utils/resolveAsset';
const logo = resolveAsset("/shortlogo.png");
const Loading = ({progress}:any) => {
  return (
<div className='h-screen  justify-center items-center flex'>
<div >

            
<img src={logo} height={300} width={300} className='mb-12' ></img>
 <Progress value={progress}  />
 </div>
 </div>
  )
}

export default Loading