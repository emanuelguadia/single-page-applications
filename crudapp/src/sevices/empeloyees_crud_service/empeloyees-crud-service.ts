import axios from "axios";
import Employee from "../../models/employees_model/employee-model";

class EmployeesCRUDService {
  //AddEmployee
  async addEmployee(employee:Employee): Promise<Employee> {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/employees/create",
        employee
      );
      const addedEmployee = response.data;
      return addedEmployee;
    } catch (err: any) {
      console.log(err);
      return err;
    }
  }
  //GetAllEmployee
  async getAllEmployees(): Promise<Employee[]> {
    try {
      const response = await axios.get<Employee[]>(
        "http://localhost:4000/api/employees"
      );
      const employees = response.data;
      console.log(employees);
      return employees;
    } catch (err: any) {
      return err;
    }
  }
   //GetOneEmployee
   async getOneEmployee(id:number): Promise<Employee> {
    try {
      const response = await axios.get<Employee>(
        `http://localhost:4000/api/employees/${id}`
      );
      const employee:Employee = response.data;
      console.log(employee);
      return employee;
    } catch (err: any) {
      return err;
    }
  }
  //UpdateEmployee
  async updateEmployee(employee:Employee): Promise<Employee> {
    console.log("${employee.id}")
      console.log(employee)
    try {
      const response = await axios.put(
        `http://localhost:4000/api/employees/update/${employee.id}`,
        employee
      );
      const updateEmployee = response.data;
      console.log("${employee.id}")
      console.log(updateEmployee)
      return updateEmployee;
    } catch (err: any) {
      return err;
    }
  }
  //DeleteEmployee
  async deleteEmployee(id: number): Promise<void> {
    try{
    await axios.delete(
      `http://localhost:4000/api/employees/delete/${id}`
    );
  }
  catch (err: any) {
  }
}}
const employeesCRUDService = new EmployeesCRUDService();
export default employeesCRUDService;
