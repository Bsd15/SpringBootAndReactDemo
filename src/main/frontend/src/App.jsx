import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Logout from "./Logout/Logout";

function App() {
  const [cookies, setCookies] = useCookies(["XSRF-TOKEN"]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/test")
      .then((response) => setMessage(response.data))
      .catch((error) => console.log(error));
  }, [cookies]);
  return (
    <div>
      <nav>
        <Logout xsrfToken={cookies["XSRF-TOKEN"]} />
      </nav>
      <main>
        <h1>And the message is: {message}</h1>
      </main>
    </div>
  );
}

export default App;
