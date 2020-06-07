import React, {Component} from 'react';
import { connect } from 'react-redux';

class Total extends Component {
   
  render() { 
    
        return ( 
         
            <div className="total">
               <h2>Total cost of all transactions</h2>
        Amount in {this.props.selectedCurrency} {(this.props.transactionList.reduce((acc, curr) => acc + curr.amount, 0)*this.props.exchangeRate).toFixed(2)} Amount in EUR  {(this.props.transactionList.reduce((acc, curr) => acc + curr.amount, 0)).toFixed(2)}
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      transactionList:state.transactionList,
      exchangeRate:state.exchangeRate,
      selectedCurrency: state.selectedCurrency 
    }
  }
  
  
  export default connect(mapStateToProps)(Total);