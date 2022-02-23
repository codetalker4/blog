import React, { useEffect } from "react";
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";



const Signin = ({setisAuth,isAuth}) => {

    const navigate = useNavigate()
    const authenticate = () => {
        signInWithPopup(auth,provider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          const user = result.user;
          console.log(user)
          console.log(result)
          localStorage.setItem("auth", true)
          setisAuth(true)
          })
      }
      useEffect(() => {
          if(isAuth){
              navigate('/')
          }
      })

    return (
    <div>
        <div>please signin to write your blog</div>
        <button onClick={authenticate}>
            signin with google
        </button>

    </div>)
}

export default Signin;