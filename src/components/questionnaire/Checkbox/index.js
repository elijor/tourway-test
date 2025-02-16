import { React } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Checkbox = ({ options = [], name, selectedValues, onChange }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((val) => val !== value);

    onChange(name, updatedValues);
  };

  return (
    <div>
      {options.map((option) => (
        <div className={styles.optionContainer} key={option.id}>
          <input
            type="checkbox"
            name={name}
            id={option.id}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleCheckboxChange}
            className={styles.hiddenCheckbox}
          />
          
          <label htmlFor={option.id} className={styles.optionLabel}>
            <span className={styles.checkmark}>
            <FontAwesomeIcon icon={faCheck} size="xl"/>
            </span>
            
            {option.label}

          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
