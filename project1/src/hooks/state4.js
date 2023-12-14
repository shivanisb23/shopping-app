import { useState, useEffect } from "react";
import swal from "sweetalert";

const Myhook4 = () => {
   let[itemlist,updateItem] = useState( [] );
   let[userlist,updateUser] = useState( [] );

  
   const getItem = () =>{
      fetch("item.json")
      .then(response =>response.json())
      .then(itemArray =>{
         updateItem(itemArray)
        swal(itemArray.length + " Records ","Loaded Successfully","success");
      })
   }


   const getUser = ()=>{
    fetch("user.json")
    .then(response =>response.json())
    .then(userArray=>{
        updateItem(userArray)
        swal(userArray.length + " Records ","Loaded Successfully","success");
    })
   }

   // useEffect is life cycle function of react hook.it get call on page load- 
   // just like onload even in javascript


   useEffect(()=>{
       getUser();
   },[1])


   return(
    <section className="container">
        <h1> Item List From Api & Search :{itemlist.length } </h1>
        <button onClick={getItem}> Click to Show Item List </button>
        {
            itemlist.map((itemname,index)=>{
                return(
                    <p key={index} className="five"> {itemname} </p>
                )
            })
        }

        <h1> Available Users from Api :{userlist.length} </h1>
        {
            userlist.map((user,index)=>{
                return(
                    <div className="five" key={index}>
                        <h3> {user.name} </h3>
                        <p> Call Me - {user.mobile} </p>
                        <p> Job Status - {user.job.toString() } </p>
                    </div>
                )
            })
        }
    </section>
   )
}

export default Myhook4;