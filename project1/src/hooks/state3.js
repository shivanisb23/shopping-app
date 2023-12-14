import { useState } from "react";
import swal from "sweetalert";

const Myhook3 = () =>{
    let temp =[ 
        {itemname: "Apple", price:300,qty:5},
        {itemname:"Orange", price:100,qty:10} 
    ];

    let[itemlist,updateItem]= useState( temp );
    let[iname,pickName] = useState("");
    let[iprice,pickPrice] = useState("");
    let[iqty,pickQty] = useState("");

    const save = () =>{
        let newbook = {itemname:iname,price:iprice, qty: iqty  };
        if(itemid== -1){
             updateItem( itemlist =[...itemlist,newbook]); //to add new value 
            swal(iname,"Added Successfully","success");
        }else{
            itemlist[itemid] = newbook;
            updateItem( itemlist =[...itemlist,newbook]); //to add new value 
            swal(iname,"Updated Successfully","success");
            updateitemid(-1);
        }
        pickName("");pickPrice("");pickQty("");
    }

    const delitem = (index, name)=>{
        itemlist.splice(index,1);
        updateItem( itemlist =[...itemlist]);
        swal(name,"Deleted Successfully","success");

    }

    let[itemid,updateitemid] = useState(-1);

    const edititem = (iteminfo,index) =>{
        updateitemid(index);
        pickName(iteminfo.itemname);
        pickPrice(iteminfo.price);
        pickQty(iteminfo.qty);

    }



    return(
        <div className="container">
          <h1> React state Management with Array of Object & [...] operator : {itemid} </h1>
            <table align="left" padding="10">
              <tbody>
              <tr>
                    <td> Enter Item Name </td>
                    <td>
                        <input type="text" 
                        onChange={obj=>pickName(obj.target.value)}
                        value={iname}/> 
                    </td>
                </tr>
               <tr>
                    <td> Enter Item Price </td>
                    <td> 
                        <input type="text" 
                        onChange={obj=>pickPrice(obj.target.value)}
                        value={iprice}/> 
                    </td>
                </tr>
                <tr>
                    <td> Enter Item quantity </td>
                    <td>
                    <input type="text" 
                        onChange={obj=>pickQty(obj.target.value)}
                        value={iqty}/> 
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        <button onClick={save}> Save </button>
                    </td>
                </tr>
              </tbody>
            </table>

            <table align="right" cellpadding="10">
                <thead>
                    <tr>
                        <th> S1 No </th>
                        <th> Item Name </th>
                        <th> Item price </th>  
                        <th> Item quantity </th>
                        <th> Total Price </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.reverse().map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {item.itemname} </td>
                                    <td> {item.price}</td>
                                    <td> {item.qty}</td>
                                    <td> {item.price * item.qty}</td>
                                    <td> 
                                        <button onClick={delitem.bind(this,index,item.itemname)}>Delete</button> </td>
                                        <button onClick={edititem.bind(this, item, index)}> Edit </button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myhook3;