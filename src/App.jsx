import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/Home";
import Layout from "./layout/Layout";
// import LayOut from "./component/rootOutlet/LayOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
