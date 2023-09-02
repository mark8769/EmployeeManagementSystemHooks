// React import is a default export.
// Typically a library will import the default export with same name.
// Default exports are not enclosed in braces.
// Named exports are modules you can import form libraries
// For example in python I could do: from datetime import time, datetime
// Datetime is the library, my named exports would be time and datetime.
// This makes it easier to see what functions I am using, and which ones aren't being used.
import React, {useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService';
// import {useHistory} from "react-router-dom";
// useHistory replaced by useNavigate in the react version I am using.
import { useNavigate, Link, useParams} from 'react-router-dom';

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    // const historyObj = useHistory();
    const navigateObj = useNavigate();
    const {id} = useParams();

    const saveEmployee = (e) => {
        
        const employee = {firstName, lastName, emailAddress};
        // Don't refresh page on form submission.
        e.preventDefault();
        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigateObj("/employees");
            }).catch((error) => {
                console.log(error);
            })
        }else{
            // This looks weird at first glance...
            // But firstName = someName
            // lastName = someLastName ...
            // When consoled log. The variable name is the key: its value is the value....
            // Cool that this idea of "unpacking" comes up so much
            console.log(employee);
            // Use then, because axios returns a promise.
            EmployeeService.saveEmployee(employee).then((response) => {
                console.log(response);
                // historyObj.push("/employees");
                navigateObj("/employees");

            }).catch((error) => {
                console.log(error);
            })
        }
    }

    useEffect( () => {
        // Place employee information in update employee form.
        EmployeeService.getEmployeeById(id).then( (response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailAddress(response.data.emailAddress);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const title = ( () => {
        if (id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    })
    return (
        <div>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}>
                                    </input>
                                    <label className="form-label">First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}>
                                    </input>
                                    <label className="form-label">Email Address</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Email Address"
                                        name="Email Address"
                                        className="form-control"
                                        value={emailAddress}
                                        onChange={(e) => setEmailAddress(e.target.value)}>
                                    </input>
                                    <br></br>
                                    <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>Submit</button>
                                    <Link to="/employees" className="btn btn-danger">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent