'use strict';

import axios from 'axios'

const host = process.env("PLAID_HOST");
const clientId = process.env("CLIENT_ID");
const secretKey = process.env("SECRET_KEY")

exports.getAccount = (accessToken, responseType) => {
	return axios({
		method: 'post',
		url: host + '/accounts/get',
		responseType: responseType,
		data: {
			'access_token': accessToken,
			'client_id': clientId,
			'secret': secretKey
		}
	})
}  