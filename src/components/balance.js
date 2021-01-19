import React, { useContext } from "react"
import {GlobalContext} from "./globalcontext.js"
import {AddTransaction} from "./add_transaction.js"

const Balance=()=>{
    const {transactionsofg}=useContext(GlobalContext);

    const amount=transactionsofg.map(  data=>data.transaction_amount );
    console.log(amount)

    const total=amount.reduce((acc,item)=>(acc +=item),0).toFixed(2)
 console.log(total)
    const Income=amount.filter(items=>items>0).reduce((acc,items)=>(acc +=items) ,0)

    const Expense=amount.filter(items=>items<0).reduce((acc,items)=>(acc +=items) ,0)
    
 
    return(
        
        <div className="container  text-center">
        <h1 className="balance">BALANCE</h1>
  
    <h1 id="total">${total}</h1>   

         
         <div className="container ">
             <div className="row">
                 <div className=" col-12     col-md-5 income">
             <div className="income">Income
    <br></br>  {Income}$ </div>
    </div>

    <div  className=" col-12     col-md-6  income">
             <div className="balances">Balance
    <br></br>  {Expense}$ </div>
         </div>
     </div>   
</div>
<hr></hr>
       

        </div>
       
    )
}


export default Balance