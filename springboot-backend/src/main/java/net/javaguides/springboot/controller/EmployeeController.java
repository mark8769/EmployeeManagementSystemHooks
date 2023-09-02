package net.javaguides.springboot.controller;
import java.security.interfaces.ECKey;
import java.util.List;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/employees")
//@CrossOrigin("*")
@CrossOrigin(origins={"http://localhost:3000/"})
public class EmployeeController {

    private final EmployeeRepository employeeRepository;
    // https://www.appsdeveloperblog.com/constructor-vs-field-dependency-injection-in-spring/#:~:text=Better%20control%20over%20object%20creation,manage%20the%20lifecycle%20of%20objects.
    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    // build create employee REST api
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        // Returns optional, so could return null if not found.
        Employee employee = employeeRepository.findById(id).orElseThrow(
                // Pass lambda function (required)
                () -> new ResourceNotFoundException("Employee not found with id: " + id)
        );
        return ResponseEntity.ok(employee);
    }
    @PutMapping("updateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody  Employee employeeDetails){
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee not found with id: " + id)
        );

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailAddress(employeeDetails.getEmailAddress());
        employeeRepository.save(employee);

        return ResponseEntity.ok(employee);
    }
    @DeleteMapping("deleteEmployee/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee not found with id: " + id)
        );

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
