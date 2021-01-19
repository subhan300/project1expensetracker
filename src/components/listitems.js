import React, { useContext } from "react";
import {GlobalContext} from "./globalcontext.js"
import {AddTransaction} from "./add_transaction.js"


const ListItems=({transactionofmapobj})=>{
    const sign=transactionofmapobj.transaction_amount < 0 ? "-" : "+";
    const {delTransaction}=useContext(GlobalContext)
    return(
        <div className="history container"> 
        
        <ul>
        <div className="history_1">{transactionofmapobj.description}</div>
    <div><span>{sign}</span>{Math.abs(transactionofmapobj.transaction_amount)} </div>
        </ul>

        <button  onClick={() => delTransaction(transactionofmapobj.id)}>x</button>
       </div>


       

    )
}
export default ListItems