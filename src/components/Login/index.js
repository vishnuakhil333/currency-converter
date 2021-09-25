import Cookies from "js-cookie";
import { useState } from "react";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const login = (event) => {
    event.preventDefault();
    let usersList = localStorage.getItem("usersList");
    usersList = JSON.parse(usersList);
    let user;
    let errorMsg;
    if (usersList !== null) {
      user = usersList.find(
        (each) => each.email === email && each.password === password
      );
      if (user === undefined) {
        errorMsg = user === undefined ? "invalid credentials" : "";
      } else {
        Cookies.set("token", user.id);
        props.history.push("/");
      }
    } else {
      errorMsg = "email doesn't exist, please register";
    }
    setErrMsg(errorMsg);
  };

  return (
    <div>
      <div>
        <form onSubmit={login}>
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Enter Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <p>{errMsg}</p>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export default Login;
