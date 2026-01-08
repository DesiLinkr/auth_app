
import { Button } from './ui/button'

const Socialbtn = ({Handler,logo,provider}:any) => {
  return (
    <div className=' relative  mt-3 lg:mt-0'>
<Button variant="outline" onClick={Handler}  className='w-full lg:w-23 rounded-sm text-sm  flex items-center flex-row-reverse  
  '>
 
  <span className='lg:hidden w-[150px]'>Continue with {provider}</span>
  <img src={logo}  width={26} height={26}></img>

  </Button>
  </div>
  )
}

export default Socialbtn