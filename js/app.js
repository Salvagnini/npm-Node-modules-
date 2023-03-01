import employees from "./employees.js";

// inode import { totalSalary, departmentsQuantity } from "./methods.js";

import * as employeesMethods from "./methods.js";

console.log(employeesMethods.totalSalary(employees));

console.log(employeesMethods.departmentsQuantity(employees));

console.log(employeesMethods.departmentsSalary(employees));