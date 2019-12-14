import {sum} from '../utility/utilities';

  const dbReducer = (state,action) =>
  {
    switch(action.type)
    {
      case 'ADD':
          debugger;
            let new_model = action.payload.model;
            new_model.id = state.AvailableFunds_NextId;
            state.AvailableFunds.push(new_model);
            return{...state,AvailableFunds_NextId:new_model.id+1}
        case 'UPDATE':
          debugger;
            let updated_model = action.payload;
            let newAvailableFunds = state.AvailableFunds.filter((item) =>{
               return item.id !== updated_model.id
            });
            newAvailableFunds.push(updated_model);
            const newstate = {...state,AvailableFunds:newAvailableFunds};
            Update_CurrentBudget(newstate);
            Update_TotalBalance(newstate);
            return newstate;
        case 'DELETE':
              debugger;
              state.AvailableFunds = state.AvailableFunds.filter(item=>item.id!==action.payload.id);
              Update_CurrentBudget(state);
              Update_TotalBalance(state);

              return {...state}
      default:
        return state;
    }
  }
  export default dbReducer;





function Update_TotalBalance(state) {
  state.SummaryTotals.TotalBalance = sum(state.AvailableFunds.map(item => parseInt(item.Balance)))
    .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Update_CurrentBudget (state) {
  return state.SummaryTotals.CurrentBudget = sum(state.dataGroceryTodo.map(item => parseFloat(item.Budget)))
    .toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
