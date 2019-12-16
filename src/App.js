import React, {useState, useReducer, useContext, useEffect} from 'react';
import ManageFunds from './components/ManageFunds';
import './App.css';
import {db} from './store/storeSettings';
import dataCollections from './store/data';
import dbReducer from './store/dbReducer';
import FundsView from './components/FundsView';
import FundsSummary from './components/FundsSummary'


function App() {
  const [darkMode, setDarMode] = useState(getInitialMode);
  const [state, dispatch] = useReducer(dbReducer, dataCollections)
  useEffect(()=>{
    console.log("render");
    localStorage.setItem('dark', JSON.stringify(darkMode));
  },[darkMode]);

  useEffect(()=>{
    dispatch({type:'UPDATETOTALS'});
  },[]);

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
  return (
    <db.Provider value={{state, dispatch}} >
      <div id="todoGridParent" className={darkMode? "Dark-Mode" : "Light-Mode"}>
        <div id="item1">
          <div className="App_Title">

            <span>Available Funds</span>

          </div>
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
        </div>

        <div id="item1-2">
          <FundsSummary />
        </div>
        <div id="item2">
          <ManageFunds/>
        </div>
        <div id="item3" className="CollectionOfAvailFunds">
        <FundsView />
        </div>
      {/* <div id="item4">
        <GroceryShoppingView />
      </div> */}
      </div>
    </db.Provider>
  );
}

export default App;
