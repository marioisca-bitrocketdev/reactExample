import React, { useState, useEffect } from 'react';
import apiPost from '../../api/apiPost';
import { Link } from 'react-router-dom'

const Home = ()=>{
    const [err, setErr] = useState('')
    const [posts, setPosts] = useState([]);
    // const [comments, setComments] = useState([])
    const [filtered, setFiltered] = useState([]);
    const [input, setInput] = useState('');
    // const postList = posts.map(post=>(<p key={post.id}><a href="http://">{post.title}</a></p>))

    const isListEmpty = filtered.length === 0 

    useEffect(()=> {
        const fetchPost = async ()=>{
            try{
                const response = await apiPost.get('/posts');
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
    },[err])

    useEffect(() => {
        setFiltered(
          posts.filter((post) =>
            post.title.toLowerCase().includes(input.toLowerCase())
          )
        );
      }, [input, posts]);

    return(
        <>
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text"/>
            {isListEmpty && <p>Nessun risultato disponibile</p>}
           
            {filtered.map((filt)=> <Link key={filt.id} to={`detail/${filt.id}`}>
                <li>{filt.title}</li>
            </Link>)}

        </>
    )}


export default Home;

