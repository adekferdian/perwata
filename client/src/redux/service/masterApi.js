import API from "./axiosConfig";
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
    getDataTypeMaster: async(pageNumber, showLimit, param) => {
        let endpoint;
        if (param) {
            endpoint = `DataType/GetAllData/${pageNumber}/${showLimit}?searchValue=${param}`
        } else {
            endpoint = `DataType/GetAllData/${pageNumber}/${showLimit}`
        }
        return API(endpoint, "master", {
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
    createDataTypeMaster: async(body) => {
        return API(`DataType/SaveDataType`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    editDataTypeMaster: async(body) => {
        return API(`DataType/UpdateDataType`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteDataTypeMaster: async(id) => {
        return API(`DataType/DeleteDataType/${id}`, "master",  {
            method: "DELETE",
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getMasterMeasurement: async(pageNumber, showLimit, param) => {
        let endpoint;
        if (param) {
            endpoint = `MeasurementFrequent/GetAllData/${pageNumber}/${showLimit}?searchValue=${param}`
        } else {
            endpoint = `MeasurementFrequent/GetAllData/${pageNumber}/${showLimit}`
        }
        return API(endpoint, "master",  {
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
    getAllMasterMeasurement: async(pageNumber, param) => {
        let endpoint = `MeasurementFrequent/GetAllData/${pageNumber}/1000`
        return API(endpoint, "master",  {
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
    createMasterMeasurement: async(body,) => {
        return API(`MeasurementFrequent/SaveMeasurementFrequent`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    editMasterMeasurement: async(body,) => {
        return API(`MeasurementFrequent/UpdateMeasurementFrequent`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteMasterMeasurement: async(id,) => {
        return API(`MeasurementFrequent/DeleteMeasurementFrequent/${id}`, "master",  {
            method: "DELETE",
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
    getMasterCodeIndicator: async(pageNumber, showLimit, param) => {
        let endpoint;
        if (param) {
            endpoint = `CodeIndicator/GetAllData/${pageNumber}/${showLimit}?searchValue=${param}`
        } else {
            endpoint = `CodeIndicator/GetAllData/${pageNumber}/${showLimit}`
        }
        return API(endpoint, "master",  {
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
    getAllMasterIndicator: async(pageNumber, param) => {
        let endpoint = `CodeIndicator/GetAllData/${pageNumber}/1000`
        return API(endpoint, "master",  {
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
    deleteMasterCodeIndicator: async(id) => {
        return API(`CodeIndicator/DeleteCodeIndicator/${id}`, "master",  {
            method: "DELETE",
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
    editMasterCodeIndicator: async(body) => {
        return API(`CodeIndicator/UpdateCodeIndicator`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    addMasterCodeIndicator: async(body) => {
        return API(`CodeIndicator/SaveCodeIndicator`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getDataKpiPerspective: async(param) => {
        return API(`KPIType/GetAllData/1/10`, "master",  {
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
    getDataKpiPerspectiveBySearch: async(param) => {
        return API(`KPIType/GetAllData/1/1000?searchValue=${param}`, "master",  {
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
    getDataKpiPerspectiveByPage: async(pageNumber, showLimit) => {
        return API(`KPIType/GetAllData/${pageNumber}/${showLimit}`, "master",  {
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
    deleteDataKpiPerspective: async(id) => {
        return API(`KPIType/DeleteKPIType/${id}`, "master",  {
            method: "DELETE",
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
    editDataMasterKpiType: async(body) => {
        return API(`KPIType/UpdateKPIType`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    createDataMasterKpiType: async(body) => {
        return API(`KPIType/SaveKPIType`, "master",  {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getDataKpiPerspectiveSearch: async(param) => {
        return API(`KPIType/GetAllData/1/10?searchValue=${param}`, "master",  {
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
    getListPic: async(param) => {
        return API(`SBUPIC/GetAllData/1/100`, "master",  {
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
    getListPicSBU: async(param) => {
        return API(`SBU/GetAllData/1/100`, "master",  {
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
    getListPicFilter: async(param) => {
        return API(`SBUPIC/GetAllData/1/100?filterSbuCode=${param}`, "master",  {
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
    getMasterDataType: async(param) => {
        return API(`/DataType/GetAllData/1/100`, "master",  {
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
    getMasterDataPic: async(pageNumber, showLimit) => {
        return API(`SBUPIC/GetAllData/${pageNumber}/${showLimit}`, "master",  {
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
    getMasterDataPicBySearch: async(pageNumber, showLimit, keyword) => {
        return API(`SBUPIC/GetAllData/${pageNumber}/${showLimit}?searchValue=${keyword}`, "master",  {
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
    editMasterDataPic: async(id, payload) => {
        console.log(id, payload);
        return API(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/sbu/v1/api/SBU/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            },
            // agent: httpsAgent,
            head: {
                "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            },
            body: payload
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getYearPerspective: async() => {
        return API(`BscHeader/GetYear`, "transaksi", {
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
    getYearDefinition: async(pic) => {
        return API(`BscHeader/GetYearDefinition/${pic}`, "transaksi", {
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
    getYearActual: async(pic) => {
        return API(`BscHeader/GetYearActual/${pic}`, "transaksi", {
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
    getBSCHeader: async(pageNumber, param) => {
        return API(`BscHeader/GetAllData/${pageNumber}/${param}`, "transaksi", {
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
    getBSCHeaderWithYear: async(pageNumber, param, year) => {
        return API(`BscHeader/GetAllData/${pageNumber}/${param}?filterYear=${year}`, "transaksi", {
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
    getBSCHeaderDefinition: async(role, pageNumber, param, pic, query) => {
        console.log(query);
        return API(`BscHeader/GetAllDefinitionByPicData/${role}/${pic}/${pageNumber}/${param}${query}`, "transaksi", {
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
    getBSCHeaderDefinitionByYear: async(pageNumber, param, pic, year) => {
        return API(`BscHeader/GetAllDefinitionByPicData/${pic}/${pageNumber}/${param}?filterYear=${year}`, "transaksi", {
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
    getBSCHeaderDefinitionSearch: async(param, pic, key) => {
        console.log(param, pic, key);
        return API(`BscHeader/GetAllDefinitionByPicData/${pic}/1/${param}${key}`, "transaksi", {
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
    getBSCHeaderSearch: async(param) => {
        return API(`BscHeader/GetAllData/1/10?searchValue=${param}`, "transaksi", {
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
    createBscCms: async(body) => {
        return API(`BscTransaction/SaveKpiPerspectiveCMS`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    addNewBscHeader: async(body) => {
        return API(`BscTransaction/SaveBscStrObjCMS`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getAllStrategicObj: async(id) => {
        return API(`BscStrObj/GetAllData/${id}/1/10`, "transaksi", {
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
    getAllStrategicObjPageNumber: async(id, pageNumber) => {
        return API(`BscStrObj/GetAllData/${id}/${pageNumber}/10`, "transaksi", {
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
    getAllStrategicObjShow: async(id, show) => {
        return API(`BscStrObj/GetAllData/${id}/1/${show}`, "transaksi", {
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
    getAllStrategicObjDefinition: async(role, id, pic, showLimit) => {
        return API(`BscStrObj/GetAllDefinitionDataByBscHeaderId/${id}/${role}/${pic}/1/${showLimit}`, "transaksi", {
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
    getAllStrategicObjDefinitionPageNumber: async(role, id, pic, pageNumber, showLimit) => {
        return API(`BscStrObj/GetAllDefinitionDataByBscHeaderId/${id}/${role}/${pic}/${pageNumber}/${showLimit}`, "transaksi", {
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
    getAllStrategicObjDefinitionByPic: async(role, id, pic,pageNumber, showLimit, param) => {
        console.log(pageNumber, showLimit);
        return API(`BscStrObj/GetAllDefinitionDataByBscHeaderId/${id}/${role}/${pic}/${pageNumber}/${showLimit}${param}`, "transaksi", {
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
    getBscLevel1: async(id) => {
        console.log(id, 'di master api');
        return API(`BscLevel1/GetAllData/${id}/1/10`, "transaksi", {
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
    getBscLevel1Definition: async(pic, id) => {
        console.log(id, 'di master api');
        return API(`BscLevel1/GetAllDefinitionDataByBscStrObjId/${pic}/${id}/1/11`, "transaksi", {
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
    getAllStrategicObjSearch: async(id, pageNumber, showLimit, keyword) => {
        console.log(id, 'di master api');
        return API(`BscStrObj/GetAllData/${id}/${pageNumber}/${showLimit}?searchValue=${keyword}`, "transaksi", {
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
    getDataLevel2: async(id, keyword) => {
        return API(`BscLevel2/GetAllData/${id}/1/10`, "transaksi", {
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
    getDataLevel3: async(id, keyword) => {
        console.log(id, 'di master api');
        return API(`BscLevel3/GetAllData/${id}/1/10`, "transaksi", {
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
    getDetailAllDefinition: async(role, pic, id) => {
        console.log(pic, id);
        return API(`BscLevel1/GetAllDefinitionDetailDataByBscStrObjId/${role}/${pic}/${id}/1/10`, "transaksi", {
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
    getActualDataKPI: async(pic, keyword) => {
        console.log(keyword);
        return API(keyword === null ? `BscHeader/GetAllActualByPicData/${pic}/1/10` : `BscHeader/GetAllActualByPicData/${pic}/1/10?searchValue=${keyword}`, "transaksi",{
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
    getAllActualData: async(pic, pageNumber, showLimit, param) => {
        return API(`BscHeader/GetAllActualByPicData/${pic}/${pageNumber}/${showLimit}${param}`, "transaksi", {
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
    getActualDataKPIFilterPage: async(pic, pageNumber, showLimit, param) => {
        return API(`BscHeader/GetAllActualByPicData/${pic}/${pageNumber}/${showLimit}${param}`, "transaksi", {
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
    getActualDataKPIFilterYear: async(pic, year) => {
        return API(`BscHeader/GetAllActualByPicData/${pic}/1/10?filterYear=${year}`, "transaksi", {
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
    getActualLevel1: async(pic, id) => {
        return API(`BscStrObj/GetAllActualDataByBscHeaderIdPic/${pic}/${id}/1/11`, "transaksi", {
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
    getActualLevel2: async(pic, id) => {
        return API(`BscLevel2/GetAllActualDataByLvl1IdPic/${pic}/${id}/1/11`, "transaksi", {
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
    getActualLevel3: async(pic, id) => {
        return API(`BscLevel3/GetAllActualDataByLvl2IdPicAsync/${pic}/${id}/1/11`, "transaksi", {
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
    getActualDwh: async(year, kpiCode) => {
        return API(`BscActualDwh/GetActualDwhByYearKpiCode/${year}/${kpiCode}`, "transaksi", {
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
    getDetailAuthPic: async(keyword) => {
        console.log(keyword);
        return API(`Authentication/BindMenuAuthDetail/${keyword}`, "master",  {
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
    getActualDataLevel: async(pic, id) => {
        return API(`BscLevel1/GetAllActualDataByBscStrObjId/${pic}/${id}/1/100`, "transaksi", {
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
    createStrategicObj: async(id, body) => {
        return API(`BscTransaction/SaveBscStrObjCMS/?strObjId=${id}`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    createStrategicObjDefinition: async(id, body, sbu) => {
        return API(`BscTransaction/EditBscStrObjDefinition/${id}/${sbu}`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    login: async(body) => {
        return API(`GlobalLogin/Login`, "", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    generateLastKpi: async(body) => {
        return API(`BscTransaction/GenereateCMS`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    editStrategicCms: async(id, body) => {
        return API(`BscTransaction/SaveBscStrObjCMS/?strObjId=${id}`, "transaksi", {
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
            body: body
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    checkEnableButtonSubmitDefinition: async(id) => {
        return API(`BscTransaction/CheckCompletenessForSubmitDefinitionByBscId/${id}`, "transaksi", {
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
            },
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    submitKPIDefinition: async(pic, payload) => {
        return API(`BscTransaction/SubmitKpiDefinitionByBscIdPic/${pic}`, "transaksi", {
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
            body: payload
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    submitActualData: async(pic, payload) => {
        return API(`BscTransaction/SubmitKpiActualByBscIdPic/${pic}`, "transaksi", {
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
            body: payload
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    submitEditActualData: async(payload) => {
        return API(`BscTransaction/SaveBscActual`, "transaksi", {
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
            body: payload
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteBscKpiPerspective: async(id) => {
        console.log("masuk");
        return API(`BscTransaction/DeleteBscStrObjCMS/${id}`, "transaksi", {
            method: "DELETE",
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteLevel1: async(id) => {
        return API(`BscLevel1/Delete/${id}`, "transaksi", {
            method: "DELETE",
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteLevel2: async(id) => {
        return API(`BscLevel2/Delete/${id}`, "transaksi", {
            method: "DELETE",
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    deleteLevel3: async(id) => {
        return API(`BscLevel3/Delete/${id}`, "transaksi",  {
            method: "DELETE",
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    addMemberPic: async(body) => {
        return API(`SBUPIC/SaveSBUPIC`, "master",  {
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
    getListSbuMaster: async() => {
        return API(`SBUPIC/GetSbu`, "master",  {
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
            },
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getUserProfile: async(body) => {
        return API(`http://10.100.4.116:8162/api/UserProfile/GetData/1/10?searchValue=${body}`, {
            method: "GET",
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8",
            //     "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            // },
            // head: {
            //     "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            // }
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
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
    getGlobalBu: async(body) => {
        return API(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/sbu/v1/api/BU`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            },
            // agent: httpsAgent,
            head: {
                "apikey": "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhaG1hZC5mYWl6aW5Aa2FsYmUuY28uaWQiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFobWFkLmZhaXppbkBrYWxiZS5jby5pZCIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiQmFsYW5jZSBTY29yZSBDYXJkIiwiaWQiOjEyMywidXVpZCI6IjVmMTg4NGIzLWQxYjYtNDE0YS05NjBkLTU0YWYyMDcxNDk2MiJ9LCJpc3MiOiJodHRwczpcL1wvbS1vbmUua2FsYmUuY28uaWQ6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJTQU5EQk9YIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLVNCVSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9zYnVcL3YxIiwicHVibGlzaGVyIjoibW9oYW1tYWQuYW1pcnJ1ZGluQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ikdsb2JhbC1Mb2dnZXIiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvbG9nZ2luZ1wvdjEiLCJwdWJsaXNoZXIiOiJtb2hhbW1hZC5hbWlycnVkaW5Aa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6Ik1vZHVsZUFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Nb2R1bGVBUElcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuZGlhbmlAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiUm9sZU9wZW5zaGlmdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9Sb2xlT3BlbnNoaWZ0XC92MSIsInB1Ymxpc2hlciI6Im11ZGhha2lyLnRvaGFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTY2MzEzNTk2NiwianRpIjoiMTlhMWM1MmQtZDdlYi00NzgxLTgwMDQtMDAxNmNhZDk1ZDVkIn0=.OnT606D95QKN2rLHoWGesMZBIlQxr9UGnEuoownXnazMrIIdyM8qwSUKaay_ZiI6b5Wa1Be6cROijepWHJOhPmkkQLuhf1dKIoeMg6Ss4GhoC4K1EIgJvNeWii9Z3x1Z5aa5Kjp4rmVFlU0VWhhoQVgEVkBjZeHlyaI6gubERzUxiTVySCpskAY577mrSjZhne6FZsvi25J41TiYXgU3kaPrxQjAoKdFRm8ZspgxEqSTJJXeHkKOWi0yLnTz2aUzyUlYzDmiLtHdVEYhkT9xIZymovkMHYmqHGonGp6kG09WEUfsuLK59fMf5wYwwiMUB3ZkixvIjPzsciAegejMSg=="
            }
        })
            .then((res) => buildResponse(res, true))
            .catch((err) => buildResponse(err.response ?? null, true));
    },
}