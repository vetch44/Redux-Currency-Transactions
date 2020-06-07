import React, {Component} from 'react';
import { connect } from 'react-redux';

class AddTransaction extends Component {
   
  render() { 
        
        return ( 
         
            <div>
              <div className="newTransaction"> 
              <p>Add your Transaction</p>
                 <input placeholder="Name of Transaction" type="text" className="transactionName" value={this.props.transactionName} onChange={this.props.nameOfTransaction}></input>
                 <input type='number' value={this.props.inputValue} className="transactionAmount" onChange={this.props.inputChanged}></input>€   
                 <button onClick={this.props.addTransaction}>Add</button>
                 </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      inputValue: state.inputValue,
      transactionName: state.transactionName
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      addTransaction: () => dispatch({type:'addTransaction'}),
      inputChanged: (e) => {
        const action = { type: 'addAmount', text: e.target.value};
        dispatch(action);
      },
      nameOfTransaction: (e) => {
        const action = { type: 'nameOfTransaction', text: e.target.value};
        dispatch(action);
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddTransaction);