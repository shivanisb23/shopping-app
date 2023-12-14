
const Mygallery = () =>{
    let imagelist = ["1.jpg","2.jpg","3.jpg","4.jpg"] ;
    return(
        <div className="container">
            <h1> React Image Gallery </h1>
            {
                imagelist.map((imgname,index)=>{
                    return(
                        <img src={imgname} key={index} className="mypic" alt="No image"/>
                    )
                })
            }
        </div>
    )
}

export default Mygallery;