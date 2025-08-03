import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Styles from './EmployeeCard.module.css';

function EmployeeCard(props) {
  const theme = useContext(ThemeContext); // ✅ Get theme from context

  return (
    <div className={Styles.Card}>
      <h3>{props.employee.name}</h3>
      <p>{props.employee.email}</p>
      <p>{props.employee.phone}</p>
      <p>
        {/* ✅ Use theme as className */}
        <a href="#" className={theme}>Edit</a> 
        <a href="#" className={theme}>Delete</a> 
      </p>
    </div>
  );
}

export default EmployeeCard;