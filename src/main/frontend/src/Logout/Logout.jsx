import React from "react";

function Logout(props) {
  return (
    <div>
      <form method="POST" action="/logout">
        <input type="hidden" name="_csrf" value={props.xsrfToken} />
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

export default Logout;
