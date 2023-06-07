import { Link, useNavigate, useParams } from "react-router-dom";
import "./DeleteEmployee.css";
import { useForm } from "react-hook-form";
import employeesCRUDService from "../../../sevices/empeloyees_crud_service/empeloyees-crud-service";
import Employee from "../../../models/employees_model/employee-model";
import { Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
function DeleteEmployee(): JSX.Element {
  const { register, handleSubmit } = useForm<Employee>();
  const navigation = useNavigate();
  const idString = useParams<string>();
  const [idToDelete, setIdToDelete] = useState<number>(0);
  let idNumber:number=0;
  idNumber = Number(idString.id);
  async function submit(): Promise<void> {
    try {
      await employeesCRUDService.deleteEmployee(idToDelete);
      navigation("/");
    } catch (wrr: any) {}
  }
  useEffect(() => {
    console.log("The string Params  from url");
    console.log(idString.id);
    console.log("The idString number to cast integer");
    console.log(idNumber);
    console.log("The id number to delete is ");
    setIdToDelete(idNumber);
    console.log(idToDelete);
  },[idNumber]);
  return (
    <div className="DeleteEmployee Box">
      <h6>do you want to delete this employee</h6>
      <form onSubmit={handleSubmit(submit)}>
      <label>Name of the employee</label>
        <input type="text" autoFocus {...register("name")} placeholder="Employee name" />
        <br />
        <label>Age of employee</label>
        <input type="number" {...register("age")}  placeholder="Employee age"  />
        <br />
        <label>Country of the employee</label>
        <input type="text" {...register("country")}  placeholder="Employee country"  />
        <br />
        <label>Position Actor Of employee</label>
        <input type="text" {...register("position")}  placeholder="Employee position"  />
        <br />
        <label>Wage of the employee </label>
        <input type="text" {...register("wage")}  placeholder="Employee wage"  />
        <br />
        <button>Delete</button>
        <button
          onClick={() => {
            navigation("/");
          }}
        >
          Cancel
        </button>
       
      </form>
    </div>
  );
}

export default DeleteEmployee;
