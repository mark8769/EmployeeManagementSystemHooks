package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Implementing CommandLineRunner Interface provides run method.
// https://www.javaguides.net/2020/02/spring-boot-commandlinerunner-example.html#:~:text=CommandLineRunner%20is%20an%20interface%20used,can%20be%20ordered%20with%20%40Order.
@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	// Make sure to autowire the database layer..
	// Use "constructor based" dependency injection.
	private final EmployeeRepository employeeRepository;
	@Autowired
	public SpringbootBackendApplication(EmployeeRepository employeeRepository){
		this.employeeRepository = employeeRepository;
	}
	@Override
	public void run(String... args) throws Exception{
//		Employee employee = new Employee();
//		employee.setFirstName("Mark");
//		employee.setLastName("Ortega-Ponce");
//		employee.setEmailAddress("ortegam@augsburg.edu");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee.setFirstName("John");
//		employee.setLastName("Ortega");
//		employee.setEmailAddress("john@augsburg.edu");
//		employeeRepository.save(employee1);
	}
}
