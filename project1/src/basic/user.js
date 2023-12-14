

function Myuser()
{
    let alluser =["Ganesh","Kartik","Bhusan","Ali","Suresh"];
    return(
        <div className="container">
            <h1> User Management { alluser.length }</h1>
            {
                alluser.map((fullname,index)=>{
                    return(
                        <p> { fullname } </p>
                    )
                })
            }
        </div>
    )
}

  export default Myuser;

  
