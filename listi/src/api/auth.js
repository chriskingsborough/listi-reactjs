import { flask_app } from "./base";

const login = (username, password) => {
  flask_app.post("/login", data).then((response) => {
    localStorage.setItem("token", response.data.token);
  });
};

// This most certainly does not work

// login examples
//  https://medium.com/javascript-in-plain-english/all-in-one-tutorial-on-how-to-create-the-authentication-part-of-your-react-app-2530e7435629
