
import { useState } from "react";

const Myhook1 = () =>{
    
    //console.log(useState() ); //[undefined,f()]

    
    //let [counter,updateCounter]= [undefined,f()];
    let [counter,updateCounter]= useState(100);

    const one = () =>{
        updateCounter( counter+10 )
    } 

    const two = () =>{
        if(counter>0){
            updateMessage("Value updated...")
            updateCounter( counter - 10 )
        }else{
            updateMessage("Sorry,Out of range")
        }
    } 

    let[booklist,updateBook]= useState( ['html','css','bootsrap','javascript'] );

    const save = () =>{
        updateBook( booklist = [ ...booklist,"Text Book"]); //a=a+b;
        updateMessage("Book Added Successfully")
    }

    let[message,updateMessage] = useState("");

    return(
        <section className="container">
            <h1> useState() - How it work? </h1>
            <h1> The counter Value :{ counter } </h1>

            <div align="center">
                <button onClick={ one }> Click to + By 10 </button>
                <button onClick={ two }> Click to - By 10 </button>
            </div>

            <p> {message} </p>

            
            <h3> Available Books : {booklist.length} </h3>
            <button onClick={ save }> Click to Add New </button>
            {
                booklist.map((bookname,index)=>{
                    return(
                        <p> {bookname} </p>
                    )
                })
            }
        </section>
    )
}

export default Myhook1;