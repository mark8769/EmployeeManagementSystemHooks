## Using MySQL database

- Open terminal.
- Issue:

```
mysql -ur root -p
```

- This will prompt you for a password.
- Create database once logged in:

```
create database ems;
```

- To see database was created.
```
show databases;
```

## Configuring application.properties for database connection.

```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jbdc:mysql://localhost:3306/ems?useSSL=false
spring.datasource.username=root
spring.datasource.password=Mark@123
spring.datasource.driver-class-name=com.mysql.cj.jbdc.Driver
```