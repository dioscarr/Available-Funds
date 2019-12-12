
import React, { useState } from 'react';
import {connect} from '../store/storeSettings';
import {getCurrentDate} from '../utility/utilities';

const ManageFunds = (props)=>{
    const [NewFundName, setNewFundName] = useState ("");
    const [NewFundBalance, setNewFundBalance] = useState ("");
    const ResertFields = ()=>{setNewFundName("");setNewFundBalance("");}
    const NewFund = e =>{
    let newModel = {id:0, Name:NewFundName, Balance:NewFundBalance, BalanceDate:getCurrentDate() };
      props.dispatchAddNewfund({model:newModel});
      ResertFields();
    }

    return(
      <div className="Toolbar">
        <div>Add New Fund Cat</div>
        <input type="text" name="NewFundName" onChange={e=>setNewFundName(e.target.value)}  value={NewFundName} />
        <div>$ Balance</div>
        <input type="text" name="NewFundBalance" onChange={e=>setNewFundBalance(e.target.value)}  value={NewFundBalance} />
        <button type="button" onClick={NewFund}>Add New Fund</button>
      </div>
    );
  }
const mapStateToProps = state =>{return{fundList: state.AvailableFunds}}
const mapDispatchToProps = dispatch =>{
  return{
    dispatchAddNewfund: (payload)=> dispatch({type:'ADD', payload})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageFunds);

