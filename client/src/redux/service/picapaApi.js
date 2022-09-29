import API from "./picapaConfig";
import {
    REST_URL_BSC_HEADER_PICAPA_SIRA,
    REST_URL_BSC_HEADER_GET_YEAR_PICAPA_SIRA,
    REST_URL_STROBJ_PICAPASIRA,
    REST_URL_ALL_LEVEL_PICAPASIRA,
    REST_URL_ALL_CHECK_SUBMIT_PICAPASIRA,
    REST_URL_ALL_SUBMIT_PICAPASIRA,
    REST_URL_ALL_SAVE_PICAPASIRA
} from "constant";


const https = require("https")
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

function buildResponse(response, auth) {
    if(auth){
      return response;
    }
    if(response.status === 401 || response.status === 403){
      return RootNavigation.forceLogout();
    }else{
      return response;
    }
};

export default {
    getBscHeaderPicapaSira: async(role, pic, pageNumber, showLimit, param) => {
        return API(`${REST_URL_BSC_HEADER_PICAPA_SIRA}${role}/${pic}/${pageNumber}/${showLimit}/${param}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getYearBscHeaderPicapaSira: async(pic) => {
        return API(`${REST_URL_BSC_HEADER_GET_YEAR_PICAPA_SIRA}${pic}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getStrObjPicapaSira: async(role, pic, id, pageNumber, showLimit, param) => {
        return API(`${REST_URL_STROBJ_PICAPASIRA}${role}/${pic}/${id}/${pageNumber}/${showLimit}${param ? param : ""}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getAllLevelPicapaSira: async(role, pic, month, year, id, pageNumber, showLimit) => {
        return API(`${REST_URL_ALL_LEVEL_PICAPASIRA}${role}/${pic}/${month}/${year}/${id}/${pageNumber}/${showLimit}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    checkSubmitPicapaSira: async(id, month, year) => {
        return API(`${REST_URL_ALL_CHECK_SUBMIT_PICAPASIRA}${id}/${month}/${year}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    submitPicapaSira: async(id, body) => {
        return API(`${REST_URL_ALL_SUBMIT_PICAPASIRA}${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    savePicapaSira: async(id,month, year, body) => {
        return API(`${REST_URL_ALL_SAVE_PICAPASIRA}${id}/${month}/${year}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            agent: httpsAgent,
            head: {
                "app_id": "aff72b3b",
                "app_key": "5141d168f334de01240ae116d373aff0"
            },
            body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
}