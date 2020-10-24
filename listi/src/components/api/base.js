//  configuration file for api endpoints

import axios from "axios";

export const API_URL = "https://listi-flask.herokuapp.com/";
export const listi_api_app = axios.create({ baseURL: API_URL });
