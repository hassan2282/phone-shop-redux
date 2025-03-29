const initialState = {
    fetchData: [],
    addData: []
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
      default:
        return state;
    }
  };
  
  export default Reducer;