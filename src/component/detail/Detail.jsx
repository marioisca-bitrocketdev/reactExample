import {React, useEffect, useState} from 'react'
import apiPost from '../../api/apiPost';
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const params = useParams();
    const [err, setErr] = useState('')
    const [posts, setPosts] = useState({});
    const [comments, setComments] = useState([]);
    

    useEffect(()=> {
      const fetchPost = async ()=>{
          try{
              const response = await apiPost.get(`/posts/${params.id}`);
              setPosts(response.data)
          } catch (e){
              if(e.response){
                  console.log(e.response.data);
                  console.log(e.response.status);
                  console.log(e.response.headers);
              } else{
                  setErr(`Errore: ${e.message}`);
                  console.log(err);
              }
          }
      }
      fetchPost();
  },[err, params])

  useEffect(()=> {
    const fetchPost = async ()=>{
        try{
            const response = await apiPost.get(`/posts/${params.id}/comments`);
            setComments(response.data)
        } catch (e){
            if(e.response){
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.headers);
            } else{
                setErr(`Errore: ${e.message}`);
                console.log(err);
            }
        }
    }
    fetchPost();
},[err, params])

  
  return (
    <>
    <h1>{posts.title}</h1>
    <p>{posts.body}</p>
    <h2>Comments</h2>
    {comments.map((comment)=>
    <div key={comment.id}>
      
      <hr></hr>
      <p><b>Name: </b>{comment.name}</p>
      <p><b>Email: </b>{comment.email}</p>
      <p><b>Comment: </b>{comment.body}</p>
      <hr></hr>
    
    </div>
    
    )
}
    </>
  )
}
