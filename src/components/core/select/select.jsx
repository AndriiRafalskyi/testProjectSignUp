import React from 'react';

const Select = () => {
    return <div class="select">
    <select name="slct" id="slct">
      <option selected disabled>Choose an option</option>
      <option value="1">Pure CSS</option>
      <option value="2">No JS</option>
      <option value="3">Nice!</option>
    </select>
  </div>
}

export default Select;