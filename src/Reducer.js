const dataArray = [];

const Reducer = (state = dataArray, action) => {

    switch(action.type) {
        case "Fetch":
            return [...state, action.payload]
        default:
            return state;
    }

}

export default Reducer;