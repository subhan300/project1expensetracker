



// 
import React, { useState, useContext } from 'react';


import { GlobalContext } from './globalcontext';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
          
            id: new Date().getTime(),
            description:description,
            transaction_amount: +transactionAmount 
        }
      
        addTransaction(newTransaction);
     
      

        

    }

    return( 


   
        <div>
        <div className="container  text-center">
        <h1 className="balance">Transaction form</h1>
        </div>

<hr></hr>



<div style={{display:"flex",justifyContent:"center",padding:"10px",marginBottom:"5px"}}>

<form  onSubmit={onSubmit} style={{padding:"20px",margin:"10px"}}>
  <div className="form-group text-center" style={{padding:"15px"}}>
    <label forHtml="exampleInputEmail1">Description</label>
    &nbsp;  <input style={{borderRadius:"50% 50% 50% 50%",border:"2px solid blueviolet",
    fontSize:"18px",textAlign:"center"}} type="text" className="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" value={description}  onChange={(e)=>{setDescription(e.target.value)}}>
    </input>
  </div>
  <div className="form-group text-center"  style={{padding:"20px",margin:"10px"}} >
    <label forHtml="exampleInputPassword1" > Amount</label>
    &nbsp; &nbsp; <input style={{borderRadius:"50% 50% 50% 50%",border:"2px solid blueviolet",
    fontSize:"18px",textAlign:"center"}}  type="number" className="form-control" id="exampleInputPassword1"  value={transactionAmount}  onChange={(e)=>{setTransactionAmount(e.target.value)}}></input>
  </div>
  <div className="text-center" style={{display:"flex",justifyContent:"center"}}>
  <button style={{padding:"10px",backgroundColor:"blueviolet",fontSize:"26px",fontWeight:"bold",borderRadius:"50px 50px 50px 50px"
}} type="submit" className="btn btn-primary  ">Submit</button>
  </div>
</form>
     
</div>
       
</div>
    )

    }


