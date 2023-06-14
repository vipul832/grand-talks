import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./components/Layout/Layout";
import BlogAdmin from "./components/AdminPage/AdminPage";
import BlogContentPage from "./components/BlogContentPage/BlogContentPage";
import BlogEditorPage from "./components/BlogEditorPage/BlogEditorPage";
import { getAuthStatus } from "./App/feature/authSlice";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route element={<CheckAuth />}>
          <Route path="blogpanel" element={<BlogAdmin />} />
          <Route path="blog" element={<BlogContentPage />} />
          <Route path="blogeditor" element={<BlogEditorPage />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;

function CheckAuth() {
  const { authStatus } = useSelector(getAuthStatus);
  return authStatus ? <Outlet /> : <Navigate to={"/signin"} />;
}
