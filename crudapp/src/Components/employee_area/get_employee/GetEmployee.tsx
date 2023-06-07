import { useEffect, useState } from "react";
import "./GetEmployee.css";
import employeesCRUDService from "../../../sevices/empeloyees_crud_service/empeloyees-crud-service";
import Employee from "../../../models/employees_model/employee-model";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function GetEmployee(): JSX.Element {
    const [employeesList, setEmployeesList] = useState<Employee[]>([{
      "id": 7,
      "name": "Anna",
      "age": 27,
      "country": "Israel",
      "position": "Tel Aviv",
      "wage": 27000
    }]);
    async function getAllEmployeesFromCRUDService(): Promise<void> {
      setEmployeesList(await employeesCRUDService.getAllEmployees());
    }
    useEffect(() => {
      getAllEmployeesFromCRUDService();
    }, []);

    return (
        <div className="GetEmployee">
            {employeesList.map((employee) => {
        return (
          <div className="Box" style={{ background: "linen" }}>
            <p>First name:{employee.name}</p>
            <p>age: {employee.age}</p>
            <p>country: {employee.country}</p>
            <p>position: {employee.position}</p>
            <p>wage: {employee.wage}</p>
            <Row>
          <Col>
            <Link to="/delete_employee">delete</Link>
          </Col>
          <Col>
            <Link to="/update_employee">edit</Link>
          </Col>
        </Row>
          </div>
        );
      })}
        </div>
    );
}

export default GetEmployee;
