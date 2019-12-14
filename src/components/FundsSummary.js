import React, {useContext} from 'react';
import {db} from '../store/storeSettings';


const FundsSummary = () =>{
const {state,dispatch} = useContext(db);
    return(
        <div className = "FundsSummaryRoot">
            <div>Fund's Summary</div>
            <div>Available Balance</div>
            <div>${state.SummaryTotals.TotalBalance}</div>
            <div>Current Budget</div>
            <div>${state.SummaryTotals.CurrentBudget}</div>
        </div>
    );
}
export default FundsSummary;