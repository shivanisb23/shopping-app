import { useState } from "react";

const Myhook2 =() =>{
    let[booklist,updateBook]=useState( ['HTML','CSS','Javascript'] );
    let[newbook,pickBook] = useState("Python");

    const deletebook= (index) =>{
        booklist.splice(index,1); //a-b
        updateBook(booklist = [...booklist]); //a=a; remaining update in state
    }

    const save = () =>{
        updateBook( booklist =[...booklist,newbook]);
        pickBook("");

    }


    return(
        <section className="container">
            <h1> useState(),[...]spread operator add,list,delete in array </h1>
            <p> {newbook} </p>
            <p> 
                Enter Book Name:
                <input type="text" id="bname" onChange={obj =>pickBook(obj.target.value )}/>
                <button onClick={save}>Save</button>
            </p>
            
            {
                booklist.map((bookname,index)=>{
                    return(
                        <p className="five" key={index}>
                           #{index}.{bookname}
                           <br/>
                           <button onClick={ deletebook.bind(this, index ) }>Delete</button>
                        </p>
                    )
                })
            }

        </section>
    )
}

export default Myhook2;