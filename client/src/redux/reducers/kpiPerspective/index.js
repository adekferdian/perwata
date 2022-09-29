// **  Initial State
const initialState = {
    errorDuplicate: false
  }
  
  const kpiPerspective = (state = initialState, action) => {
    switch (action.type) {
      case 'errorDuplicate':
        return {
          ...state,
          errorDuplicate: action.data,
        }
      default:
        return state
    }
  }
  
export default kpiPerspective;
  