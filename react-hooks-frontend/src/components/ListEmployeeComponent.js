import React, { useState } from 'react'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

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
                <tbody>
                    {/* Write some JSX code 
                    Make Sure to access employee attributes, based off JSON
                    response being returned from the Spring Boot backend...*/}
                    {
                        employees.map(
                            employee => {
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailAddress}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
