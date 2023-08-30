import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    // componentDidMount() class component equivalent
    useEffect( () => {
        // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
        // Promise-based asynchronous pattern in JavaScript
        EmployeeService.getAllEmployees().then((response) =>{
            setEmployees(response.data);
            console.log(response.data)
        }).catch((error) =>{
            console.log("Cathching error.")
            console.log(error);
        });
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">
                List Employees
            </h2>
            <table className="table table-border table-striped">
                <thead>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                </thead>
                    {/* Write some  JSX code 
                    Make Sure to access employee attributes, based off JSON
                    response being returned from the Spring Boot backend...*/}
                <tbody>
                    { 
                        employees.map(
                            employee => 
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailAddress}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
