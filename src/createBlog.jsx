import React from "react";
import './createBlog.css'
import {auth,db} from './firebase'
import {useState,useEffect} from 'react'
import {addDoc,collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'



const CreateBlog = ({isAuth}) => {
    let navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content,setContent] = useState('')

    const collect = collection(db, 'blogs')
    const addblog = () => {
        addDoc(collect,{title,content,author:auth.currentUser.displayName})
        console.log('success')
        navigate('/')
        }
    useEffect(() => {
        if(!isAuth) {
            navigate('/signin')
        }
    })
    

    return (
    <div className="container">
        <div className="title-cont">
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" onChange={(e) =>setTitle( e.target.value)}/>
       
        </div>
        <div className="content-cont">
            <label htmlFor="blog">blog</label>
            <textarea name="blog" id="blog" onChange={(e) => setContent(e.target.value) }></textarea>
        </div>
        <button onClick={addblog} className="btn" >addblog</button>

    </div>
    )
}

export default CreateBlog;