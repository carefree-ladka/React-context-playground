import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import DashboardRoute from "./components/Dashboard/DashboardRoute";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Team from "./components/Dashboard/Team";
import Projects from "./components/Dashboard/Projects";
import Calender from "./components/Dashboard/Calender";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      {/* <Route index element={<Dashboard />} /> */}
      <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardRoute />} />
        <Route path="/dashboard" element={<DashboardRoute />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="calender" element={<Calender />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
