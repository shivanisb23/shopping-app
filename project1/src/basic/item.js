import Details from "./itemdetails";

const Myitem = () =>{
return(
    <section className="container">
        <h1> Component Reuse with props Example </h1>
<Details iname="mango" price="100" qty=" 200" stock="yes" about="good"/>
<Details iname="apple" price="200" qty=" 300" stock="yes" about="Verygood"/>



    </section>
)
}
export default Myitem;