const initialState = {
    transactionList: [
        ],
    exchangeRate: 1.13,
    selectedCurrency: 'USD',
    inputValue: 0,
    transactionName: ''
};

const reducer = (state = initialState, action) => {
    const newState = {...state}
switch (action.type) {
    case "addTransaction":
        if(state.inputValue>0){
        return { 
                ...state,
                transactionList: [...state.transactionList, {amount:state.inputValue, name:state.transactionName, id: Math.random()}],
                inputValue: 0,
                transactionName: ''
        }}
        break
        case "deleteAll":
        return { 
                ...state,
                transactionList: []
        }
    case "addAmount":
        return { 
            ...state,
            inputValue: Number(action.text)
         
        }
    case 'delete':
    return{ 
        ...state,
        transactionList: state.transactionList.filter(e => e.id !== action.id)

    }
    case 'rateChanged':
        return{ 
            ...state,
            exchangeRate: Number(action.text)
    
        }
    case 'nameOfTransaction':
            return{ 
                ...state,
                transactionName: action.text
        
            } 
    case 'getRate':
        return{
            ...state,
            exchangeRate: action.currentRate,
            selectedCurrency: action.selectedCurrency
        }        
    default:
    break;
}
    return newState;
}

export default reducer;