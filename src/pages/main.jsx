import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/navbar";

const Main = () => {
  return(
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Main;