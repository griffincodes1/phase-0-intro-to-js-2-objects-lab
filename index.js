const employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const newemployee =  Object.assign({}, employee);
    delete newemployee[key];
    return newemployee;
  }

  function destructivelyDeleteFromEmployeeByKey(driver, key) {
    Object.assign({}, employee);
    delete employee[key]; 
    return employee;
    }
