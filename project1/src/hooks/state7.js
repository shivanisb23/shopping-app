import { useState,useEffect } from "react";
import swal from "sweetalert";

const Myhook7 =() =>{
    let[postlist,updatePost] = useState( [] );

    const getPost =()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response =>response.json())
        .then(postArray =>{
            updatePost(postArray);
            swal(postArray.length + "Todos"," Loaded Successfully","success")
        })
    }

    useEffect(()=>{
        getPost()
    },[1]);

    return(
        <section className="container">
            <h1> Available Todos Are :{ postlist.length } </h1>

            {
                postlist.map((post,index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {post.userId} </legend>
                            <p> {post.id} </p>
                            <p> {post.title} </p>
                            <p> {post.completed} </p>

                        </fieldset>
                    )
                })
            }

        </section>
    )
}

export default Myhook7;
