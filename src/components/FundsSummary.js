import React, {useContext} from 'react';
import {db} from '../store/storeSettings';

import {Fab} from '@material-ui/core';
import { FaCheck } from 'react-icons/fa';
import {MdEdit} from 'react-icons/md'

const FundsSummary = () =>{
const {state,dispatch} = useContext(db);
    return(
        <div className = "FundsSummaryRoot">
            <div>Fund's Summary</div>
            <div>${state.SummaryTotals.TotalBalance}</div>
            <div>
                <Fab onClick={()=>{}} color="primary" aria-label="edit">
                <MdEdit style={{fontSize:'30px'}} />
                </Fab>
            </div>
            {/* <div>Current Budget</div>
            <div>${state.SummaryTotals.CurrentBudget}</div> */}
        </div>
    );
}
export default FundsSummary;