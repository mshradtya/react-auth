import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={["User"]} />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["SuperAdmin"]} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["SuperAdmin", "User"]} />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
