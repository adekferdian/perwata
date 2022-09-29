// **  Initial State
const initialState = {
    kpi: [],
    navigation: []
  }
  
  const kpiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'getKpiType':
        return {
          ...state,
          kpi: action.data,
        }
      case 'setAccount':
        return {
          ...state,
          navigation: action.data,
        }
      default:
        return state
    }
  }
  
  export default kpiReducer
  