import React, { useContext } from "react"
import { GlobalContext} from "./globalcontext.js"
import {GlobalProvider} from "./globalcontext.js"
import ListItems from "./listitems.js";
import AppReducer from "./AppReducer.js";
import {AddTransaction} from "./add_transaction.js"


// import ListItems from "./listitems.js"
export const History=()=>{
    const {transactionsofg}=useContext(GlobalContext)  ;
    console.log(transactionsofg)
 
    return(
        <>
        <div className="container  text-center " >
        <h1  id="history" >History</h1>

      
         {transactionsofg.map(transactionsofmap=> {
            return (
               <ListItems key={transactionsofmap.id} transactionofmapobj={transactionsofmap}/>
               
            )
        })} 
 

         
 
<hr></hr> 
        


        </div>
        </>
       
    )
}

