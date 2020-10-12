//  configuration file for api endpoints

import axios from "axios";

export const API_URL = "https://listi-flask.herokuapp.com/";
export const flask_app = axios.create({ baseURL: API_URL });
