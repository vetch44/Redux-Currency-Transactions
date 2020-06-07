import React, {Component} from 'react';
import { connect } from 'react-redux';

class ChangeRate extends Component {
  
  render() { 
        
        return ( 
          
            <div className="exchangeRate">
                 <input type='number' value={this.props.exchangeRate} onChange={this.props.rateChanged}></input>
                <p>Selected Rate {this.props.exchangeRate.toFixed(2)} {this.props.selectedCurrency}</p>
                 <button className='getRate' onClick={this.props.getGBPRate}>GBP</button>
                 <button className='getRate' onClick={this.props.getYenRate}>Yen</button>
                 <button className='getRate' onClick={this.props.getUSDRate}>USD</button>
              </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      exchangeRate: state.exchangeRate,
      selectedCurrency: state.selectedCurrency 
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      rateChanged: (e) => {
        const action = { type: 'rateChanged', text: e.target.value};
        dispatch(action);
      },
      getGBPRate: () => {
          const url = 'https://api.exchangeratesapi.io/latest';
          fetch(url)
          .then(res => res.json())
          .then(response => {
              dispatch({type: 'getRate', currentRate: response.rates.GBP, selectedCurrency: 'GBP'});
          });
      },
      getYenRate: () => {
        const url = 'https://api.exchangeratesapi.io/latest';
        fetch(url)
        .then(res => res.json())
        .then(response => {
            dispatch({type: 'getRate', currentRate: response.rates.JPY, selectedCurrency: 'JPY'});
        });
    },
    getUSDRate: () => {
      const url = 'https://api.exchangeratesapi.io/latest';
      fetch(url)
      .then(res => res.json())
      .then(response => {
          dispatch({type: 'getRate', currentRate: response.rates.USD, selectedCurrency: 'USD'});
      });
  }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChangeRate);