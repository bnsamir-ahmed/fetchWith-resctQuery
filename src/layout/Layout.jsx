import { Outlet } from "react-router-dom";
// import Nav from "../header/Nav"
import Nav from "../component/header/Nav";
import Footer from "../component/footer/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { providerContext } from "../context/Context"
const Layout = () => {



  const queryClient = new QueryClient();
  return (
    <>
    {/* <providerContext> */}

      <QueryClientProvider client={queryClient}>
        <Nav />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    {/* </providerContext> */}
    </>
  );
};
export default Layout;
