import React from 'react';
import styles from './select.module.css';

const Select = (props) => {
  const { options, meta: { error, touched }, input, label } = props;

  return <div className={styles.select}>
    <select { ...input }>
      {options.map((option, index) => <option key={index}>{option}</option>)}
    </select>
    <label className={styles.label}>
      <span>{label}</span>
    </label>
    <span class="focus"></span>
    {touched && error && <span>
        {error}
      </span>
    }
  </div>
}

export default Select;