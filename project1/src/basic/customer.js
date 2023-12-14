
const Mycustomer = () =>{
    let allcustomer = [
        {city:"Bangalore", user:['Ganesh', 'Mahesh', 'Alex', 'Gopi', 'Suresh']},
        {city:"Chennai", user:['Suman Jee', 'Satish Mishra']},
        {city:"Delhi", user:['Santosh', 'Amir', 'Mantu']},
        {city:"Mumbai", user:['Radhe', 'Sambhu', 'Gotia', 'Alex']}
    ];
    return(
        <div className="container">
            <h1> Nested Array & Nested map() Example </h1>
            {
                allcustomer.map((mycustomer, index)=>{
                    return(
                        <fieldset>
                            <legend> {mycustomer.city} </legend>

                            {
                               mycustomer.user.map((fullname, index2)=>{
                                return(
                                    <p> { fullname } </p>
                                )
                               })
                            }

                        </fieldset>
                    )
                })
            }
        </div>
    )
}

export default Mycustomer;