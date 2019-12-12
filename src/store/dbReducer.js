
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
            let updated_model = action.payload;

            let newAvailableFunds = state.AvailableFunds.filter((item) =>{
               return item.id.toString().indexOf(1) !== updated_model.id
            });
            state.AvailableFunds = newAvailableFunds;
            return {...state,updated_model}
            case 'DELETE':
              debugger;
              state.AvailableFunds = state.AvailableFunds.filter(item=>item.id!==action.payload.id);
              return {...state}
      default:
        return state;
    }
  }
  export default dbReducer;