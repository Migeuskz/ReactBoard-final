import { Outlet } from "react-router-dom";
import Slidebar from "../../components/Slidebar";
import './DashBoardLayout.css'


export default function DashboardLayout() {
  return (
    <>
    <header>
      <h1>Dashboard Layout</h1>
    </header>
      <main>
        <Slidebar/>
        <Outlet/>
      </main>
    </>
  )
}
