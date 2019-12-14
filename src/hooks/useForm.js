import { useState } from 'react';
import {getCurrentDate} from '../utility/utilities';

/**
 *  `useForm`.
*
* **/
export function useForm(initState) {
  const [fields, setFields] = useState(initState);
  const setField = (e) => {setFields({ ...fields, [e.target.name]: e.target.value });}
  const reset = ()=>setFields({Name:"",Balance:""});
  const isBalanceValid = ()=>{return (isNaN(fields.Balance))?false:true}
  const model = ()=>{
    debugger;
    let model = {id:fields.id, Name:fields.Name, Balance:fields.Ibalance, BalanceDate:getCurrentDate()}
    return model;
  }
  return [fields,setField,reset,isBalanceValid,model]
}
