# Project Setup Guide 🚀

## Task 1: Hotel Booking System 🏨

### Steps to Access and Run:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arjunji123/Assignment-Pixel-Nest-Media
   ```

2. **Navigate to Task 1 Directory:**

   ```bash
   cd Task-1/hotel-booking-system
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Project:**
   ```bash
   npm start
   ```

The application will open, and you can interact with the Hotel Booking System UI built with **ReactJS** and **Tailwind CSS**.

---

## Task 2: Employee Management System 👩‍💼👨‍💼

### Steps to Access and Run:

1. **Navigate to Task 2 Directory:**

   ```bash
   cd Task-2/employee-management
   ```

2. **Import the Database into MySQL:**

   - The SQL file is located in the `employee-management` folder and is named **employee_management.sql**.
   - Import this file into your MySQL database.

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Project:**

   ```bash
   npm start
   ```

5. **API Endpoints (Test with Postman) 📬:**

   - **POST API:** Add a new employee.

     - URL: `http://localhost:3000/employees`
     - Request Body:
       ```json
       {
         "name": "John Doe",
         "department": "Engineering",
         "salary": 50000
       }
       ```

   - **GET API:** Fetch employee details by ID.

     - URL: `http://localhost:3000/employees/{id}`

   - **PUT API:** Update employee details.

     - URL: `http://localhost:3000/employees/{id}`
     - Request Body:
       ```json
       {
         "name": "John Smith",
         "department": "Engineering",
         "salary": 55000
       }
       ```

   - **DELETE API:** Delete an employee by ID.
     - URL: `http://localhost:3000/employees/{id}`

You can now test these APIs in Postman and manage the employee data!

---

## Task 3: Text File 📄

This task involves a **text file**. Further instructions can be found inside the file.

---

## Task 4: Inventory System 📦

### Steps to Access and Run:

1. **Navigate to Task 4 Frontend:**

   ```bash
   cd task-4/inventory-system
   ```

2. **Navigate to Task 4 Backend:**
   Open a **new terminal** and navigate to the backend directory:

   ```bash
   cd task-4/backend
   ```

3. **Install Dependencies in Both Frontend and Backend:**
   In both directories (frontend and backend), run:

   ```bash
   npm install
   ```

4. **Import the Database into MySQL:**
   The SQL file is located in the `task-4` folder and is named **inventory_db.sql**.

   - Import this into MySQL.

5. **Start the Project:**

   - In the frontend directory, run:
     ```bash
     npm start
     ```
   - In the backend directory, run:
     ```bash
     npm start
     ```

6. **Authentication:**
   - Username: `admin`
   - Password: `123456`

Once authenticated, you’ll be redirected to the **Product List** page, where you can:

- Add products
- Edit product details
- Delete products

---

## Task 5 & 6: Text Files 📄

Both Task 5 and Task 6 involve **text files**. Please refer to the respective files for further details.

---

### Important Notes ⚠️

- Ensure that you have **Node.js** and **npm** installed on your machine before proceeding.
- Make sure **MySQL** is properly configured and running.
- For the tasks involving API endpoints, use **Postman** to test them.
