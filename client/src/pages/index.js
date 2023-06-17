import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import { useSelector } from 'react-redux'
import Users from './users'
import Rider from './rider'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {token,role} = useSelector(state=> state.user)
  const AuthorizedScreen=()=>{
    switch(role){
      case 'user':
        return <Users/>
      case 'rider':
        return <Rider/>
    }
  }
  if(token){
    return <AuthorizedScreen/>
  }
    return(<Login/>)
    
 
}