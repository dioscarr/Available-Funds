import React, {useContext} from 'react'
import GroceryTodoTemplate from './GroceryTodoTemplate';
import {db} from '../store/storeSettings';

const GroceryShoppingView = ()=>
{

 const {state, dispatch} = useContext(db);
 const GroceryTodoList = state.dataGroceryTodo;

  return (<div className="GroceryShoppingRow">
            <div>Groceries Shopping</div>
            <input type="text"  onChange={()=>{}} /><button>Add</button>
              {GroceryTodoList.map(todo =><GroceryTodoTemplate key={todo.id} todo={todo} />)}
          </div>);
}
export default GroceryShoppingView;