import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies(["XSRF-TOKEN"]);
  return (
    <div>
      <p>CSRF Token: {cookies["XSRF-TOKEN"]}</p>
      <form method="POST" action="/logout">
        <input
          type="hidden"
          name="_csrf"
          value={cookies["XSRF-TOKEN"]}
        />
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

export default App;
