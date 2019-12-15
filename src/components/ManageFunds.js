
import React, {useContext} from 'react';
import { useForm } from '../hooks/useForm';
import {db} from '../store/storeSettings';
import {getCurrentDate} from '../utility/utilities';

import {Fab} from '@material-ui/core';
import { IoIosAdd } from 'react-icons/io';

const ManageFunds = (props)=>{
    const {dispatch} = useContext(db);
    const {fields,setFields, setField, isBalanceValid} = useForm({Iname:"", Ibalance:""});
    function Add()
    {
      let model = {id:0,Name:fields.Iname,Balance:fields.Ibalance,BalanceDate:getCurrentDate()};
      dispatch({type:'ADD', payload:{model:model}});
      setFields({Iname:'', Ibalance:''});
    }
    return(
      <div className="Toolbar">
        <div>Add New Fund Cat</div>
        <input type="text" name="Iname" onChange={setField}  value={fields.Iname} />
        <div>$ Balance</div>
        <input type="text" name="Ibalance" onChange={setField}  value={fields.Ibalance} />
        <div>{(isBalanceValid())?"Valid":"Not Valid"}</div>
        {/* <button type="button" onClick={Add}>Add New Fund</button> */}
        <Fab onClick={Add} color="primary" aria-label="add">
                    <IoIosAdd style={{fontSize:'55px',fontWeight:'900'}} />
                </Fab>
      </div>
    );
  }
export default ManageFunds;
