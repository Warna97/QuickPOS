# QuickPOS

QuickPOS is a Point of Sale (POS) system built using Angular for the frontend, Spring Boot for the backend, and MySQL for the database.

## Project Structure
```
frontend/: Contains the Angular application.
backend/: Contains the Spring Boot application.
```

## Prerequisites
- Node.js and npm
- Angular CLI
- Java JDK (version 17 or above)
- Maven
- MySQL

## Setup Instructions

### Frontend (Angular)

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the Angular application:
   ```
   ng serve
   ```
   The application will be available at [http://localhost:4200](http://localhost:4200).

### Backend (Spring Boot)

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Add the following dependencies in \`pom.xml\`:

   ```
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-jpa</artifactId>
   </dependency>
   <dependency>
       <groupId>mysql</groupId>
       <artifactId>mysql-connector-java</artifactId>
       <version>8.0.33</version>
   </dependency>
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
       <scope>test</scope>
   </dependency>
   ```

3. Configure the database connection in \`src/main/resources/application.properties\`:

   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
   spring.datasource.username=myuser
   spring.datasource.password=mypassword
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
   ```

4. Run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```
   The backend will be available at [http://localhost:8080](http://localhost:8080).

### Database (MySQL)

1. Install MySQL server and start the service:
   ```
   sudo apt-get update
   sudo apt-get install mysql-server
   sudo service mysql start
   ```

2. Secure the MySQL installation:
   ```
   sudo mysql_secure_installation
   ```

3. Create the database and user:
   ```
   CREATE DATABASE mydatabase;
   CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
   GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

## License

This project is licensed under the MIT License.
