import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Register(params) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const signUp = (event) => {
    event.preventDefault();

    let usersList = localStorage.getItem("usersList");
    usersList = JSON.parse(usersList);
    let userDetails;
    if (usersList !== null) {
      //check in db if user with email exists
      let userFromDb = usersList.find((user) => user.email === email);
      if (userFromDb === undefined) {
        //no match case, so add the user to db
        const user = { username, email, password };
        usersList.push(user);
      } else {
        //yes then display user with eamil already exist
        setErrMsg("user with this email already exists");
      }
    } else {
      userDetails = {
        id: uuidv4(),
        username,
        email,
        password,
      };
      usersList = [userDetails];
    }
    localStorage.setItem("usersList", JSON.stringify(usersList));
  };

  return (
    <div>
      <div>
        <form onSubmit={signUp}>
          <label htmlFor="username">Enter Username</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
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
export default Register;
