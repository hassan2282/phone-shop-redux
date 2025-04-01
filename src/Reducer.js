const initialState = {
  fetchData: [],
  addData: [],
  toggle: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch":
      return {
        ...state,
        fetchData: [...state.fetchData, action.payload],
      };
      
    case "ADD":
      const existingItemIndex = state.addData.findIndex(item => item.item.id === action.payload.item.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increment count
        const updatedAddData = [...state.addData];
        updatedAddData[existingItemIndex] = {
          ...updatedAddData[existingItemIndex],
          count: updatedAddData[existingItemIndex].count + 1
        };
        
        return {
          ...state,
          addData: updatedAddData,
        };
      } else {
        // Item doesn't exist, add new item with count 1
        return {
          ...state,
          addData: [...state.addData, { ...action.payload, count: 1 }],
        };
      }
      
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