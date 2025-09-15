import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "../../styles/layout.css";


export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
