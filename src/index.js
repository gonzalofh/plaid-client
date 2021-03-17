'use strict';

import axios from 'axios';

module.exports = class PlaidClient {
	
	constructor(host, clientId, secretKey) {
		this.host = host;
		this.clientId = clientId;
		this.secretKey = secretKey;
	}

	getAccount(accessToken=null, responseType=null) {
		return axios({
			method: 'post',
			url: this.host + '/accounts/get',
			responseType: responseType,
			data: {
				'access_token': accessToken,
				'client_id': this.clientId,
				'secret': this.secretKey
			}
		})
	}

}