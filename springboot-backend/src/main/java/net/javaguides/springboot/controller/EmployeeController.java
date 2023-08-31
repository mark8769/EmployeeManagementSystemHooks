package net.javaguides.springboot.controller;
import java.util.List;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
