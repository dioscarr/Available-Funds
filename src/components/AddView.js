
import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { db } from '../store/storeSettings';
import { getCurrentDate } from '../utility/utilities';

import { Fab } from '@material-ui/core';
import { FaSave } from 'react-icons/fa';

const AddView = (props) => {
  const { dispatch } = useContext(db);
  const { fields, setFields, setField, isBalanceValid } = useForm({ Iname: "", Ibalance: "" });
  function Add() {
    let model = { id: 0, Name: fields.Iname, Balance: fields.Ibalance, BalanceDate: getCurrentDate() };
    dispatch({ type: 'ADD', payload: { model: model } });
    setFields({ Iname: '', Ibalance: '' });
  }
  return (
    <div className="Toolbar">
      <div>Add New Fund Cat</div>
      <input type="text" name="Iname" onChange={setField} value={fields.Iname} />
      <div>$ Balance</div>
      <input type="text" name="Ibalance" onChange={setField} value={fields.Ibalance} />
      <div>{(isBalanceValid()) ? "Valid" : "Not Valid"}</div>
      <Fab onClick={Add} color="primary" aria-label="add">
        <FaSave style={{ fontSize: '28px', fontWeight: '900' }} />
      </Fab>
    </div>
  );
}
export default AddView;
