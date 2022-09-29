import { DEV_URL_TRANSACTION } from "../../service/axiosConfig";
import axios from "axios";

export const submitActualData = (pic, data) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscTransaction/SubmitKpiActualByBscIdPic/${pic}`,
      method: "put",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
      data: data,
    });

    dispatch({ type: "SUBMIT_ACTUAL_DATA", payload: response.data });
    console.log(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getActualDataById = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscHeader/GetById/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_ACTUAL_DATA_BY_ID", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getActualLevel0 =
  (role, pic, id, pageNumber, pageSize, search) => async (dispatch) => {
    try {
      //  const filter = formatFilter(param);
      const response = await axios({
        url:
          `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscStrObj/GetAllActualDataByBscHeaderIdPic/${role}/${pic}/${id}/${pageNumber}/${pageSize}` +
          `${search ? "?searchValue=" + search : ""}`,
        method: "get",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          app_id: "aff72b3b",
          app_key: "5141d168f334de01240ae116d373aff0",
        },
        responseType: "json",
      });

      dispatch({ type: "GET_ACTUAL_LEVEL_0", payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
export const getActualLevel1 = (role, pic, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel1/GetAllActualDataByBscStrObjId/${role}/${pic}/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_ACTUAL_LEVEL_1", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllBSCLevel1 = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel1/GetAllData/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_ALL_BSC_LEVEL_1", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBSCLevel1 = (id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel1/GetAllData/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_BSC_LEVEL_1", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getActualLevel2 = (role, pic, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel2/GetAllActualDataByLvl1IdPic/${role}/${pic}/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_ACTUAL_LEVEL_2", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailAllDefinition = (role, pic, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel1/GetAllDefinitionDetailDataByBscStrObjId/${role}/${pic}/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_DETAIL_ALL_DEFINITION", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActualLevel3 = (role, pic, id) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscLevel3/GetAllActualDataByLvl2IdPicAsync/${role}/${pic}/${id}/1/50`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "GET_ACTUAL_LEVEL_3", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const formatFilter = (filterData) => {
  const filteredFilter = Object.entries(filterData).filter(
    (data) => data[1] !== ""
  );
  const finalFilter = filteredFilter
    .map((data) => `${data[0]}=${data[1]}`)
    .join("&");

  return finalFilter;
};

export const getAllActualData =
  (role, pic, pageNumber, pageSize, param) => async (dispatch) => {
    try {
      const filter = formatFilter(param);
      const response = await axios({
        url:
          `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscHeader/GetAllActualByPicData/${role}/${pic}/${pageNumber}/${pageSize}` +
          `${filter ? "/?" + filter : ""}`,
        method: "get",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          app_id: "aff72b3b",
          app_key: "5141d168f334de01240ae116d373aff0",
        },
        responseType: "json",
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

export const getYearActual = (pic) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscHeader/GetYearActual/${pic}`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editActualData = (data) => async () => {
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscTransaction/SaveBscActual`,
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      data: data,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const checkCompletenessForSubmit = (id) => async (dispatch) => {
  try {
    //  const filter = formatFilter(param);
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_ACTUAL_DATA}/api/BscTransaction/CheckCompletenessForSubmitActualByBscId/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        app_id: "aff72b3b",
        app_key: "5141d168f334de01240ae116d373aff0",
      },
      responseType: "json",
    });

    dispatch({ type: "CHECK_COMPLETENESS_FOR_SUBMIT", payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
