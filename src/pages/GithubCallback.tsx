import React, { use, useEffect, useState, useTransition } from 'react'
import { AuthService } from '../api/auth.service'
import { toast } from 'sonner'
import Loading from '../components/loading'
import { useNavigate, useSearchParams } from 'react-router-dom'

const GithubCallback = () => {
  
  const navigate = useNavigate();
  const [progress, setprogress] = useState(10)
const authService = new AuthService()
  useEffect(  () => {
    const run = async () => {
        try {
          

          const [searchParams] = useSearchParams();

          const code = searchParams.get("code");
    
          setprogress(60)
          if (!code) {
            alert("GitHub code missing");
            return;
          }

          await authService.github(code);

          setprogress(100)

          setTimeout(()=>{
            navigate(`/dashboard`)
          },200
        )
        } catch (error: any) {
      
          navigate(`/`)
        }
      };
       run();
    
  }, [])
  
   
  
  
  
  return (
  <Loading progress={progress} >
      </Loading>
    
  )
}

export default GithubCallback
