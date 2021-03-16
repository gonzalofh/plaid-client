'use strict';

import axios from 'axios';

exports.getAccount = (accessToken, clientId, secretKey, responseType) => {
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