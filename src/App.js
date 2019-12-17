import React, { useState, useReducer, useEffect } from 'react';
import './App.scss';
import './moonies.scss'
import { db } from './store/storeSettings';
import dataCollections from './store/data';
import dbReducer from './store/dbReducer';
import { getInitialMode } from './utility/Locals';

// import components
import FundsView from './components/FundsView';
import AddView from './components/AddView';
import FundsSummary from './components/FundsSummary'
import ToolsBar from './components/ToolsBar';
import Header from './components/Header';

function App() {
  const [darkMode, setDarMode] = useState(getInitialMode());
  const [state, dispatch] = useReducer(dbReducer, dataCollections)

  useEffect(() => {
    console.log("render");
    localStorage.setItem('dark', JSON.stringify(darkMode));
    dispatch({ type: 'THEMEMODE', payload: { mode: darkMode } });

  }, [darkMode]);

  useEffect(() => {
    dispatch({ type: 'UPDATETOTALS' });
  }, []);
  return (
    <db.Provider value={{ state, dispatch }} >
      <div id="todoGridParent" className={darkMode ? "Dark-Mode" : "Light-Mode"}>
        {(state.visible.isHeaderVisible) && <Header />}
        {(state.visible.isSummaryVisible) && (<div data-theme={state.dataTheme.theme} id="FundsSummaryRoot"><FundsSummary /></div>)}
        {(state.visible.isAddViewVisible) && (<div data-theme={state.dataTheme.theme} id="ManageFundsRoot"><AddView /></div>)}
        {(state.visible.isToolBarVisible) && (<div id="ToolsBarRoot"><ToolsBar /></div>)}
        {(state.visible.isAccountView) && (<div data-theme={state.dataTheme.theme} data-accounts-layout={state.dataTheme.acts_theme} id="FundsView" className="CollectionOfAvailFunds"><FundsView /></div>)}
        {/* <div id="item4">
        <GroceryShoppingView />
      </div> */}
      </div>
    </db.Provider >
  );
}

export default App;
