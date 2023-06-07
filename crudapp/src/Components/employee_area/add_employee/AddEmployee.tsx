import { useForm } from "react-hook-form";
import "./AddEmployee.css";
import Employee from "./../../../models/employees_model/employee-model";
import employeesCRUDService from "../../../sevices/empeloyees_crud_service/empeloyees-crud-service";
import { Link, useNavigate } from "react-router-dom";
function AddEmployee(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();
  const navigation = useNavigate();
  async function submit(employee: Employee): Promise<void> {
    try {
       await employeesCRUDService.addEmployee(employee);
      navigation("/");
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <div className="AddEmployee Box">
      <h5>AddEmployee</h5>
      <form onSubmit={handleSubmit(submit)}>
        <label>Name of the employee</label>
      <input
          type="text"
          autoFocus
          {...register("name", {
            required: {
              value: true,
              message: "The name of employee is required",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 characters  are required ",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 characters  are required ",
            },
          })}
          placeholder="Employee name"
        />
        {errors?.name && <span>{errors.name.message?.toString()}</span>}
        <br />
         <label>Age of employee</label>
        <input
          type="number"
          {...register("age", {
            required: {
              value: true,
              message: "The age of employee is required",
            },
            max: {
              value: 120,
              message: "Maximum number employee age must  have 120",
            },
            min: {
              value: 3,
              message: "Minimum number employee age must  have 0 ",
            },
          })}
          placeholder="Employee age"
        />
        {errors?.age && <span>{errors.age.message?.toString()}</span>}

        <br />
       <label>Country of the employee</label>
        <input
          type="text"
          {...register("country", {
            required: {
              value: true,
              message: "The employee country  name  is required",
            },
            maxLength: {
              value: 50,
              message: "Country name must have Maximum 50 characters",
            },
            minLength: {
              value: 3,
              message: "Country name must have Minimum 3 characters",
            },
          })}
          placeholder="Employee country"
        />
        {errors?.country && <span>{errors.country.message?.toString()}</span>}
        <br />
       <label>Position Actor Of employee</label>
        <input
          type="text"
          {...register("position", {
            required: {
              value: true,
              message: "The employee position/city  name  is required",
            },
            maxLength: {
              value: 50,
              message: "Position/city name must have Maximum 50 characters",
            },
            minLength: {
              value: 3,
              message: "Position/city name must have Minimum 3 characters",
            },
          })}
          placeholder="Employee position"
        />
         {errors?.position && <span>{errors.position.message?.toString()}</span>}

        <br />
        <label>Wage of the employee </label>
        <input
          type="number"
          {...register("wage", {
            required: {
              value: true,
              message: "The wage of employee is required",
            },
            max: {
              value: 100000,
              message: "Maximum number employee wage must  have 100000",
            },
            min: {
              value:0,
              message: "Minimum number employee wage must  have 0 ",
            },
          })}
          placeholder="Employee wage"
        />
           {errors?.wage && <span>{errors.wage.message?.toString()}</span>} 
        <br />
        <button type="submit">Add</button>
        <button onClick={() => navigation("/")}>Cancel</button>
        <br />
      </form>
    </div>
  );
}

export default AddEmployee;
