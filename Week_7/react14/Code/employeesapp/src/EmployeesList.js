import EmployeeCard from './EmployeeCard';

function EmployeesList(props) {
  return (
    <div>
      <h1>Employees List</h1>
      {
        props.employees.map(employee =>
          <EmployeeCard employee={employee} key={employee.id} />
        )
      }
    </div>
  );
}

export default EmployeesList;