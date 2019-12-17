import React, { useContext } from 'react';
import { db } from '../store/storeSettings';
import Moonies from './small/Moonies';

import { Fab } from '@material-ui/core';
import { FaPiggyBank } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md'

const FundsSummary = () => {
    const { state, dispatch } = useContext(db);
    return (
        <div className="FundsSummaryRoot">
            <div>
                {(state.visible.isBtnAddViewVisible) && (
                    <Fab onClick={() => dispatch({ type: 'VISIBLE', payload: { target: 'AddView' } })} color="primary" aria-label="add">
                        <FaPiggyBank style={{ fontSize: '28px', fontWeight: '900' }} />+
                </Fab>)}
            </div>
            <div><Moonies /> Summary</div>
            <div>${state.SummaryTotals.TotalBalance}</div>
            <div>
                <Fab onClick={() => dispatch({ type: 'VISIBLE', payload: { target: 'AccountsView' } })} color="primary" aria-label="edit">
                    <MdEdit style={{ fontSize: '30px' }} />
                </Fab>
            </div>
            {/* <div>Current Budget</div>
            <div>${state.SummaryTotals.CurrentBudget}</div> */}
        </div>
    );
}
export default FundsSummary;