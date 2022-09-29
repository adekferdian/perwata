
export const errorDuplicate = data => {
    return dispatch => {
      dispatch({
        type: 'errorDuplicate',
        data,
      })
    }
  };
  