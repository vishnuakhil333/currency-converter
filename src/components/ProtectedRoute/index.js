import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
function ProtectedRoute(props) {
  const token = Cookies.get("token");
  if (token === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
}
export default ProtectedRoute;
