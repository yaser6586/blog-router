import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className=" h-16 w-100">navbar</div>
      {/* i add above div because when i want display fixed for navbar other content at begin
      of page going under of navbar */}
      <Outlet />
    </>
  );
}

export default App;
