import axios from 'axios';

const API = async (
	url,
	options = {
		method: 'GET',
		body: {},
		params: {},
		head: {}
	},
) => {
	const request = {
		baseURL: process.env.NEXT_PUBLIC_API_TRANSACTION_USER_URL,
		method: options.method,
		timeout: 10000,
		url,
		headers: options.head,
		responseType: 'json',
		params:options.params ?? {}
	};
	if (request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH') request.data = options.body;
    console.log(request);

	const res = await axios(request);

	if (res.status === 200) {
		return res.data;
	} else {
		return res;
	}
};

export default API;