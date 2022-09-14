import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Cookies } from "react-cookie";
import PrivateRoute from "./routes/PrivateRoute";
import SignIn from "./pages/SignIn";
import PlanDetail from "./pages/PlanDetail";
import PlanForm from "./pages/PlanForm";

function App() {
  const cookies = new Cookies();
  const authenticate = cookies.get("authenticate");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/plan/:id" element={<PlanDetail />}></Route>
        <Route path="/plan/form" element={<PlanForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
