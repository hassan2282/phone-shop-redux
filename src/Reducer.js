const initialState = {
    fetchData: [],
    addData: [],
    toggle: false,
  };

  
  const Reducer = (state = initialState, action) => {
    switch(action.type) {
      case "Fetch":
        return {
          ...state,
          fetchData: [...state.fetchData, action.payload]
        };
      case "ADD":
        return {
          ...state,
          addData: [...state.addData, action.payload]
        };
        case "TOGGLE_CART":
          return {
            ...state,
            toggle: !state.toggle,
          };

      default:
        return state;
    }
  };
  
  export default Reducer;