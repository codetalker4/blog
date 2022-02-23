import './App.css';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import CreateBlog from './createBlog'
import Signin from './signin'
import Blog from './blog'
import {auth} from './firebase'
import {signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';









function App() {
  const [isAuth,setisAuth] = useState(false)
  useEffect(() => setisAuth(window.localStorage.getItem('auth')),[])

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.setItem("auth", false);
      console.log('signed out')
      setisAuth(false)
      
    })
  }
  console.log(isAuth)

  
  return (
    <div className='body'>
      <BrowserRouter>
        <div className="App">
          <Link to='/' className='link'>blogs</Link>
          <Link to='create-blog' className='link'>create-blog</Link>
          {!isAuth ? <Link to='signin' className='link'>signin</Link> : <button onClick={signout}>signout</button>}
          

          
        </div>
        <Routes>
          <Route  path='/' element={<Blog/>} />
          <Route path='/create-blog' element={<CreateBlog isAuth={isAuth}/>} />
          <Route path='/signin' element={<Signin setisAuth={setisAuth} isAuth={isAuth} />} />

        </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
