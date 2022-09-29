import axios from 'axios';
const BASE_URL = "http://balance-score-card--apicast-staging.apps.alpha.kalbe.co.id:80/api/v1/";
const DEV_URL_MASTER = "http://master-bsc-development-kf-asd-bsc-dev.apps.alpha.kalbe.co.id/api";
const DEV_URL_TRANSACTION = "http://definition-target-bsc-devinhouse-kf-asd-bsc-dev.apps.alpha.kalbe.co.id/api";

const API = async (
	url,
	type,
	options = {
		method: 'GET',
		body: {},
		params: {},
		head: {}
	},
) => {
	console.log(type);
	const request = {
		baseURL: type === "master" ? DEV_URL_MASTER : type === "transaksi" ? DEV_URL_TRANSACTION : BASE_URL,
		method: options.method,
		timeout: 10000,
		url,
		headers: options.head,
		responseType: 'json',
		params:options.params ?? {}
	};
	if (request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH') request.data = options.body;

	const res = await axios(request);

	if (res.status === 200) {
		return res.data;
	} else {
		return res;
	}
};

export default API;