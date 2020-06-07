import React, {Component} from 'react';
import { connect } from 'react-redux';

class Max extends Component {
   
  render() { 
        const maxValue = this.props.transactionList.reduce(
        (max, element) => (element.amount > max.amount ? element : max),{name: "No Transactions",amount:0}
      )
        return ( 
         
            <div className="max">
               <h2>The most expensive Transaction</h2>
               <p>{maxValue.name}</p>
               <p>Amount in EUR: {maxValue.amount.toFixed(2)}</p>
               <p>Amount in {this.props.selectedCurrency}: {(maxValue.amount * this.props.exchangeRate).toFixed(2)}</p>
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
  
  export default connect(mapStateToProps)(Max);