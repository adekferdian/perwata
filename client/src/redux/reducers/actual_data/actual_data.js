const initialState = {
    data: [],
    // currentPage: 0,
    // pageSize: 0,
    // totalPage: 0,
  };
  
  const actualData = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ACTUAL_LEVEL_0":
        return {
          ...state,
          data: action.payload.data,
        //   currentPage: action.payload.currentPage,
        //   pageSize: action.payload.pageSize,
        //   totalPage: action.payload.totalPage,
        };
        case "GET_ACTUAL_LEVEL_1":
            return action.payload;
        case "GET_ACTUAL_LEVEL_2":
            return action.payload;
        case "GET_ACTUAL_LEVEL_3":
            return action.payload;
      default:
        return state;
    }
  };
  
  export default actualData;
  