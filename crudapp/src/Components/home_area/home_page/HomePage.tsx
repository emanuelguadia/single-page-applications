import { useEffect, useState } from "react";
import "./HomePage.css";
import employeesCRUDService from "../../../sevices/empeloyees_crud_service/empeloyees-crud-service";
import Employee from "./../../../models/employees_model/employee-model";
import { Console } from "console";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
function HomePage(): JSX.Element {
  const [employeesList, setEmployeesList] = useState<Employee[]>([
    {
      id: 2,
      name: "Andrew",
      age: 35,
      country: "USA",
      position: "Tacoma",
      wage: 20000,
    },
  ]);
  async function getAllEmployeesFromCRUDService(): Promise<void> {
    setEmployeesList(await employeesCRUDService.getAllEmployees());
  }
  useEffect(() => {
    getAllEmployeesFromCRUDService();
  }, []);
  return (
    <div className="HomePage">
      {employeesList ? (
        employeesList.map((employee) => {
          return (
            <div className="Box" style={{ background: "aqua" }}>
              <p>Employee name:{employee.name}</p>
              <p>age: {employee.age}</p>
              <p>country: {employee.country}</p>
              <p>position: {employee.position}</p>
              <p>wage: {employee.wage}</p>
              <Row>
                <Col>
                  <Link to={`/delete_employee/${employee.id}`}>Delete</Link>
              </Col>
                <Col>
                  <Link to={`/update_employee/${employee.id}`}>Edit</Link>
                </Col>
              </Row>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage;
