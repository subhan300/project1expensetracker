import React from 'react';
import './App.css';
import Header from "./components/header.js"
import {History} from "./components/history.js"
import Balance from './components/balance.js';
import {GlobalProvider} from "./components/globalcontext.js"
import {ContextProvider} from "./components/globalcontext.js"

import {AddTransaction} from './components/add_transaction.js';
function App() {
  return (
<>



<GlobalProvider>

<Header />
 <Balance/>
 <History/>
 <AddTransaction />

   </GlobalProvider>

</>
    
   
  );
}

export default App;
