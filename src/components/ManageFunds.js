
import React, {useContext} from 'react';
import { useForm } from '../hooks/useForm';
import {db} from '../store/storeSettings';

const ManageFunds = (props)=>{
    const {dispatch} = useContext(db);
    const [fields, onFieldChange, reset, isBalanceValid,model ] = useForm({id:"",Name:"",Balance:"", Ibalance:"",BalanceDate:""});
    return(
      <div className="Toolbar">
        <div>Add New Fund Cat</div>
        <input type="text" name="Name" onChange={onFieldChange}  value={fields.Name} />
        <div>$ Balance</div>
        <input type="text" name="Ibalance" onChange={onFieldChange}  value={fields.Ibalance} />
        <div>{(isBalanceValid())?"Valid":"Not Valid"}</div>
        <button type="button" onClick={()=>{dispatch({type:'ADD', payload:{model:model()}}); reset(); }}>Add New Fund</button>
      </div>
    );
  }
export default ManageFunds;
