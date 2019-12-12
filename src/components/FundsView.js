import React from 'react';
import FundTemplate from './FundTemplate';
import {connect} from '../store/storeSettings';

const FundsView = (props)=>
{
    const funcFundUpdate = (prop)=>{
        const {model} = prop;
        props.DispatchUpdateFund(model);
    }
  return(
    props.funds.map(fundItem => <FundTemplate key={fundItem.id} funditem = {fundItem} funcFundUpdate={funcFundUpdate.bind(this)} />)
  )
}
//settings
const mapStateToProps = state =>{return {funds:state.AvailableFunds}}
const mapDispatchToProps = dispatch =>
{
    return{
            DispatchUpdateFund:(payload)=>{dispatch({type:'UPDATE',payload})},
            dispatchDeleteFund:(payload)=>dispatch({type:'DELETE', payload})
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(FundsView);

