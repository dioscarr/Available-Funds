
import React, { useState, useReducer, useContext } from 'react';
import dbReducer from '../store/dbReducer';
import {db} from '../store/storeSettings';


const FundTemplate = (props)=>{
    const {state, dispatch} = useContext(db);
    const {funcFundUpdate} = props;
    let {funditem} = props;

    const [IBalance, setIBalance] = useState("");

    const onIbalanceChange = e => {
        const {value} = e.target;
        setIBalance(value);
    }
    const updateBalance = e =>
    {
        funditem.Balance = IBalance;
        funcFundUpdate({model:funditem});
        setIBalance("");
    }

    return(
            <div className="funditems">
                <div className="fundLName">{funditem.Name}</div>
                <div className="fundLBalance"> ${funditem.Balance} </div>
                <div className="fundLBalanceDate">{funditem.BalanceDate}</div>
                <div className="fundIName"><input type="text" name="Balance" onChange={onIbalanceChange}  value={IBalance}/></div>
                <div className="btnfundUpdate"><button onClick={updateBalance} type="button">update</button></div>
                <div className="btnFundRemove"><button type="button" onClick={e=>{dispatch({type:'DELETE', payload:{id:funditem.id}})}}>Remove</button></div>
            </div>
    );
}
export default FundTemplate;

