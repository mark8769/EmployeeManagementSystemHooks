import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    // GET
    getAllEmployees(){
        return axios.get(BASE_REST_API_URL);
    }
    // POST
    saveEmployee(employee){
        return axios.post(BASE_REST_API_URL, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(BASE_REST_API_URL + "/" + employeeId);
    }
    updateEmployee(employeeId, employee){
        return axios.put(BASE_REST_API_URL + `/updateEmployee/${employeeId}`, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(BASE_REST_API_URL + `/deleteEmployee/${employeeId}`);
    }
}
// Export instance of Service 
// Does this follow singleton principle?
export default new EmployeeService();