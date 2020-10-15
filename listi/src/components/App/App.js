import React from 'react';
import './App.css';
import Lists from '../Lists/Lists';


const token = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwMjY0Mzk3OSwiZXhwIjoxNjAzNjQzOTc5fQ.eyJ1c2VyX2lkIjoiYTBiZDY3OGYtNmU0My00OGQwLThlNzEtZDU0YTFjNmJmMjEyIiwiZW1haWwiOiJraW5nc0BlbWFpbC5jb20ifQ.ICZbAKkepGjdqtvUVuOO9-N0FyEWccK_8AuovHsUuqcNTVS4H6NaJj4x-sRvAhpta7ol-oGe4YICqA5Ymd92JA";
function App() {

  return (
    < Lists token={token}/>
  );
}

export default App;
