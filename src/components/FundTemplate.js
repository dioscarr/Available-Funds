import React, { useState, useContext } from 'react';
import {db} from '../store/storeSettings';
import { useForm } from './../hooks/useForm';

const FundTemplate = (props)=>{

    const itm = props.funditem;
    const {dispatch} = useContext(db);
    const [fields,
            onFieldChange,
            reset,
            isBalanceValid,
            model
            ] = useForm({
                id:itm.id,
                Name:itm.Name,
                Balance:itm.Balance,
                Ibalance:"",
                BalanceDate:itm.BalanceDate});

    //const {funcFundUpdate} = props;



    //const [IBalance, setIBalance] = useState("");

    //const onIbalanceChange = e => {
      //  const {value} = e.target;
    //    setIBalance(value);
   // }
    //const updateBalance = e =>
   // {
        //funditem.Balance = IBalance;
        //funcFundUpdate({model:funditem});
        //setIBalance("");
    //}
debugger;
    return(
        <div className="funditems">
            <div className="fundLName">{itm.Name}</div>
            <div className="fundLBalance">
                ${parseFloat(itm.Balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className="fundLBalanceDate">{itm.BalanceDate}</div>
            <div className="fundIName">
                <input type="text" name="Ibalance"
                    onChange={onFieldChange}
                    value={fields.Ibalance}/>
            </div>
            <div className="btnfundUpdate">
                <button onClick={e=>{
                    debugger;
                    dispatch({type:'UPDATE',payload:model()});
                    reset();
                }} type="button">update</button>
            </div>
            <div className="btnFundRemove">
                <button type="button"
                onClick={e=>{
                    debugger;
                    dispatch({type:'DELETE', payload:model()});
                    reset();
                }}>Remove</button>
            </div>
        </div>
    );
}
export default FundTemplate;

