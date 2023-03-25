import { API_BASE } from "@/config/settings";


import axios from "axios";
function generateId(obj: any) {
	for (let key in obj) {
		if (obj[key] && obj[key].id != undefined && obj[key].id != null) {
			obj[key + "Id"] = obj[key].id;
		}
	}
}

const axiosConf = axios.create({ baseURL: API_BASE });
axiosConf.interceptors.request.use(
	config => {
		if (true) {
			if (config.headers) {
				config.headers["Authorization"] = `Bearer`;
			}
		}
		return config;
	},
	function (error) {
		console.log("REQ ERROR ", error);
	}
);

axiosConf.interceptors.response.use(
	config => {
		return config;
	},
	function (error) {
		const status = error.response.status;
		if (status != 200) {
			// 401 ise logine yolla
			return Promise.reject(error);
		}
	}
);

export default axiosConf;
