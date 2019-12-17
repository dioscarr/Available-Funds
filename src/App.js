import React, {useState, useReducer, useEffect} from 'react';
import ManageFunds from './components/ManageFunds';
import './App.scss';
import {db} from './store/storeSettings';
import dataCollections from './store/data';
import dbReducer from './store/dbReducer';
import FundsView from './components/FundsView';
import FundsSummary from './components/FundsSummary'
import ToolsBar from './components/ToolsBar';


function App() {
  const [darkMode, setDarMode] = useState(getInitialMode);
  const [state, dispatch] = useReducer(dbReducer, dataCollections)
  useEffect(()=>{
    console.log("render");
    localStorage.setItem('dark', JSON.stringify(darkMode));
    dispatch({type:'THEMEMODE',payload:{mode:darkMode}});


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
        <div data-theme={state.dataTheme.theme} id="HeaderRoot">
          <div data-theme={state.dataTheme.theme} className="App_Title" >

            <span>Available Funds</span>

          </div>
          <div className="toggle-container">
              <span style={darkMode? {color:'black'} : {color:'yellow'}}>☼</span>
              <span className="toggle">
              <input
                checked={darkMode}
                onChange={()=>{setDarMode(prevState=>!prevState);}}
                type="checkbox"
                className="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox" />

              <span  style={!darkMode? {color:'black'} : {color:'Purple'}}>☽</span>
              </span>
            </div>
        </div>

        <div data-theme={state.dataTheme.theme} id="FundsSummaryRoot">
          <FundsSummary />
        </div>
        <div data-theme={state.dataTheme.theme} id="ManageFundsRoot">
          <ManageFunds/>
        </div>
        <div id="ToolsBarRoot">
          <ToolsBar />
        </div>
        <div  data-theme={state.dataTheme.theme}
              data-accounts-layout={state.dataTheme.acts_theme}
            id="FundsView" className="CollectionOfAvailFunds">
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
