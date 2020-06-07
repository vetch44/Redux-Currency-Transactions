import React, {Component} from 'react';
import { connect } from 'react-redux';

class Transactions extends Component {
   
  render() { 
        
        return ( 
         
            <div>
               <ul>{this.props.transactionList.map(element =>{
                 return <li key={element.id}>
                  <p>{element.name}   {element.amount.toFixed(2)} EUR</p>
                    <span className="currency">{(element.amount*this.props.exchangeRate).toFixed(2)} {this.props.selectedCurrency}</span><button onClick={() => this.props.delete(element.id)}>X</button></li>
              })}<button onClick={this.props.deleteAll}>Clear All</button></ul>
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
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteAll: () => dispatch({type:'deleteAll'}),    
      delete: (element) => {
        
        const action = { type: 'delete', id: element};
        dispatch(action);
      }
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Transactions);