'use strict';

import axios from 'axios';

exports.default = class PlaidClient {
	
	constructor(clientId, secretKey) {
		this.clientId = clientId;
		this.secretKey = secretKey;
	}

	getAccount(accessToken=null, responseType=null) {
		return axios({
			method: 'post',
			url: host + '/accounts/get',
			responseType: responseType,
			data: {
				'access_token': accessToken,
				'client_id': this.clientId,
				'secret': this.secretKey
			}
		})
	}
}