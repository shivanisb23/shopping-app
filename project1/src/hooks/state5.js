import { useState,useEffect } from "react";
import swal from "sweetalert";

const Myhook5 =() =>{
    let[commentlist,updateComment] = useState( [] );

    const getComment =()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response =>response.json())
        .then(commentArray =>{
            updateComment(commentArray);
            swal(commentArray.length + "Comments"," Loaded Successfully","success")
        })
    }

    useEffect(()=>{
        getComment()
    },[1]);

    return(
        <section className="container">
            <h1> Available comments Are :{ commentlist.length } </h1>

            {
                commentlist.map((comment,index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {comment.name} </legend>
                            <p> {comment.email} </p>
                            <p> {comment.body} </p>

                        </fieldset>
                    )
                })
            }

        </section>
    )
}

export default Myhook5;
