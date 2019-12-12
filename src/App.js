import React, {useState, useReducer, useContext, useEffect} from 'react';
import ManageFunds from './components/ManageFunds';
import './App.css';
import {db} from './store/storeSettings';
import dataCollections from './store/data';
import dbReducer from './store/dbReducer';
import FundsView from './components/FundsView';
import FundsSummary from './components/FundsSummary'

const GroceryTodoTemplate = (props)=>
{
  const {todo} = props;
  return(<div className="GroceryItem">
            <div>
              <label>
                  <input type="checkbox" onChange={()=>{}}/></label></div>
          <div>{todo.Name}</div>
            <div>${todo.Budget}</div>
            <div><input type="text"/></div>
            <div>${todo.Price}</div>
            <div><input type="text" /></div>
          </div>);
}

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

function App() {
const [darkMode, setDarMode] = useState(getInitialMode);
useEffect(()=>{
console.log("render");
localStorage.setItem('dark', JSON.stringify(darkMode));
},[darkMode]);
function getInitialMode()
{
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userprefersDark = getPreColorsScheme();

  if(isReturningUser){//if the mode was saved -> dark/light
    return savedMode;
  }
  else if(userprefersDark){//if preferred color  scheme is dark -> dark
    return true;
  }
  else{//otherwise -> light
     return false;
  }
}

function getPreColorsScheme()
{
  if(!window.matchMedia)return;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}


const [state, dispatch] = useReducer(dbReducer, dataCollections)
return (
  <db.Provider value={{state, dispatch}} >
    <div id="todoGridParent" className={darkMode? "Dark-Mode" : "Light-Mode"}>
      <div id="item1">
        <div className="App_Title">
          <div className="toggle-container">
          <span style={darkMode? {color:'black'} : {color:'yellow'}}>☼</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={()=>setDarMode(prevState=>!prevState)}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" />

          <span  style={!darkMode? {color:'black'} : {color:'Purple'}}>☽</span>
          </span>
          </div>

          <span>Available Funds</span>
           {darkMode? "Dark Mode" : "Light Mode"}

        </div>
      </div>
      <div id="item2">
        <ManageFunds/>
        <FundsSummary />
      </div>
      <div id="item3" className="CollectionOfAvailFunds">
        <FundsView />
      </div>
      <div id="item4">
        <GroceryShoppingView />
      </div>
    </div>
  </db.Provider>
);
}

export default App;
