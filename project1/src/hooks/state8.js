import { useState,useEffect } from "react";
import swal from "sweetalert";

const Myhook8 =() =>{
    let[userlist,updateUser] = useState( [] );

    const getUser =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(userArray =>{
            updateUser(userArray);
            swal(userArray.length + "Users"," Loaded Successfully","success")
        })
    }

    useEffect(()=>{
        getUser();
    },[1]);

    return(
        <section className="container">
            <h1> Available Users Are :{ userlist.length } </h1>

            {
                userlist.map((user,index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {user.id} </legend>
                            <p> {user.name} </p>
                            <p> {user.username} </p>
                            <p> {user.email} </p>
                            <p> {user.address} </p>                            
                            <p> {user.street} </p>
                            <p> {user.suite} </p>
                            <p> {user.city} </p>
                            <p> {user.zipcode} </p>
                            <p> {user.geo} </p>
                            <p> {user.phone} </p>
                            <p> {user.website} </p>
                            <p> {user.company} </p>
                            <p> {user.name} </p>
                            <p> {user.catchphrase} </p>
                            <p> {user.bss} </p>



                        </fieldset>
                    )
                })
            }

        </section>
    )
}

export default Myhook8;
