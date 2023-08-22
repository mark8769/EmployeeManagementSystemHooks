package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// Specify the entity, and the key datatype
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // All crud database methods to interact with database.
}
