import React, { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "./firebase";
import './blog.css'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    let blogcollection = collection(db,'blogs')
    useEffect(() => {
        const getblogs = async () => {
            const data = await getDocs(blogcollection)
            setBlogs(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }
        getblogs();
    },[])
    return(
        <div className="blogs">
            {blogs.map((blog) => {
                return(
                    <div key={blog.id} className="blog">
                        <div className="title" >{blog.title} </div>
                        <div className="content">{blog.content} </div>
                        <div className="author">- {blog.author} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Blogs;