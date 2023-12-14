
const Details =( info ) =>{
    

    return(
        <fieldset>
            <legend> {info.iname} </legend>
            <p> Rs.{info.price} </p>
            <p> Stock - {info.stock} </p>
            <p> Quantity - {info.qty}</p>
            <p> {info.about} </p>
            <a> Read More...</a>
        </fieldset>
    )
}

export default Details;