import {sum} from '../utility/utilities';

const dataGroceryTodo =
[{id:1, Name:'Eggs', Budget:20.80, Price:5.00},
{id:2,Name:'Milk', Budget:3.70, Price:5.00},
{id:3,Name:'Bread', Budget:1.10, Price:5.00},
{id:4,Name:'Cheese', Budget:4.99, Price:5.00},
{id:5,Name:'Cream Cheese', Budget:3.95, Price:5.00},
{id:6,Name:'Platano', Budget:3.00, Price:5.00},
{id:7,Name:'Rice', Budget:8.77, Price:5.00},
{id:8,Name:'Beans', Budget:.99, Price:5.00}];

const AvailableFunds = [
  {id:1, Name:"Gift Card", Balance:352, BalanceDate:'12/02/2019'},
  {id:2, Name:"Cash Savings", Balance:840, BalanceDate:'12/02/2019'},
  {id:3, Name:"Bacnk Acct", Balance:542, BalanceDate:'12/02/2019'},
  {id:4, Name:"Cash On Hand", Balance:180, BalanceDate:'12/02/2019'}
];

const SummaryTotals =
{
  TotalBalance:0,
  CurrentBudget:0
}

const dataCollections = {
  AvailableFunds:AvailableFunds ,
  dataGroceryTodo:dataGroceryTodo,
  AvailableFunds_NextId:0,
  SummaryTotals:SummaryTotals
};

dataCollections.AvailableFunds_NextId = dataCollections.AvailableFunds.length+1;
dataCollections.SummaryTotals.ToalBalance = Update_TotalBalance(dataCollections);
dataCollections.SummaryTotals.CurrentBudget = Update_CurrentBudget(dataCollections);

  export default dataCollections;


  function Update_TotalBalance(state, ) {
    state.SummaryTotals.TotalBalance = sum(state.AvailableFunds.map(item => parseInt(item.Balance)))
      .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function Update_CurrentBudget (state) {
    return state.SummaryTotals.CurrentBudget = sum(state.dataGroceryTodo.map(item => parseFloat(item.Budget)))
      .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
