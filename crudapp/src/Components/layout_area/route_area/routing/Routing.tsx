import "./Routing.css";
import AddEmployee from "../../../employee_area/add_employee/AddEmployee";
import UpdateEmployee from "../../../employee_area/update_employee/UpdateEmployee";
import GetEmployee from "../../../employee_area/get_employee/GetEmployee";
import DeleteEmployee from "../../../employee_area/delete_employee/DeleteEmployee";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../../home_area/home_page/HomePage";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>  
    <Route path="/" element={<HomePage/>} />
     <Route path="/add_employee" element={<AddEmployee/>} />
        <Route path="/get_employee" element={<GetEmployee/>} />
        <Route path="/update_employee/:id" element={<UpdateEmployee/>} />
        <Route path="/delete_employee/:id" element={<DeleteEmployee/>} />
      </Routes>
    </div>
  );
}

export default Routing;
