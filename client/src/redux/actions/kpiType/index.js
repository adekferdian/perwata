
export const getKpitype = data => {
  return dispatch => {
    dispatch({
      type: 'getKpiType',
      data,
    })
  }
};

export const accountType = data => {
  return dispatch => {
    dispatch({
      type: 'setAccount',
      data,
    })
  }
};