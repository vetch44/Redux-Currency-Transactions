import React, {Component} from 'react';
import Total from './Components/total';
import Max from './Components/max';
import Transactions from './Components/transactionsList';
import AddTransaction from './Components/addTransaction';
import ChangeRate from './Components/changeRate';

class  App extends Component {
  
  render() { 
        
        return ( 
          
            <div>
               <h1>My Transactions</h1>
                 < AddTransaction />
                  <ChangeRate />
              <div className="main">
                <Transactions />
                <Max />
              </div>
                <Total />
              
            </div>
         );
    }
}
  
  export default (App);