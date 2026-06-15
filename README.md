# 📦 Inventory Management System

A full-stack web application built with Node.js, Express.js, and MySQL that helps businesses manage their inventory efficiently. The application includes secure authentication, product management, inventory tracking, search and filtering features, and a modern glass morphism user interface.

## 🌐 Live Demo

**Application URL:**
https://inventory-management-system-production-1962.up.railway.app

---

## 🚀 Features

* 🔐 Admin Login with Session Authentication
* 📦 Add, Edit, and Delete Products (Full CRUD)
* 🔍 Search Products by Name
* 🗂️ Filter Products by Category
* ⚠️ Low Stock Alerts (Quantity < 10)
* 📊 Dashboard with Live Inventory Statistics
* 💎 Modern Glass Morphism UI
* ☁️ Railway Cloud Deployment
* 🌍 Publicly Accessible Live Demo
* ⚡ Environment Variable Configuration
* 🔄 RESTful Routing Architecture

---

## 🛠️ Tech Stack

| Layer           | Technology          |
| --------------- | ------------------- |
| Backend         | Node.js, Express.js |
| Database        | MySQL               |
| Frontend        | EJS, HTML5, CSS3    |
| Authentication  | Express Session     |
| API Design      | RESTful CRUD        |
| Deployment      | Railway             |
| Version Control | Git & GitHub        |

---

## 📊 Dashboard Features

* Total Products Count
* Low Stock Product Monitoring
* Product Search Functionality
* Category-Based Filtering
* Real-Time Inventory Updates

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/hamidnadeem043/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create MySQL Database

```sql
CREATE DATABASE inventory_app;

USE inventory_app;

CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2)
);
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
MYSQLHOST=localhost
MYSQLUSER=root
MYSQLPASSWORD=your_password
MYSQLDATABASE=inventory_app
MYSQLPORT=3306
```

### 5️⃣ Run the Application

```bash
node index.js
```

Open your browser:

```text
http://localhost:8080
```

---

## 🔑 Login Credentials

| Field    | Value    |
| -------- | -------- |
| Username | Hamid    |
| Password | iamalpha |

---

## 📁 Project Structure

```text
inventory-management/

├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── login.ejs
│   ├── home.ejs
│   ├── showproducts.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── .env
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔗 API Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /login             | Login Page        |
| POST   | /login             | Authenticate User |
| GET    | /logout            | Logout User       |
| GET    | /                  | Dashboard         |
| GET    | /products          | View Products     |
| GET    | /products/new      | New Product Form  |
| POST   | /products          | Create Product    |
| GET    | /products/:id/edit | Edit Product Form |
| PATCH  | /products/:id      | Update Product    |
| DELETE | /products/:id      | Delete Product    |

---

## ☁️ Deployment

This application is deployed using Railway.

### Railway Services

* Railway Web Service
* Railway MySQL Database
* Automatic GitHub Deployment
* Environment Variable Management

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Express.js Development
* MySQL Database Integration
* Session-Based Authentication
* CRUD Operations
* RESTful API Design
* Environment Variables
* Cloud Deployment with Railway
* Git & GitHub Workflow
* MVC-Based Project Structure
* Full Stack Web Development

---

## 📸 Screenshots

### Login Page

(Add Screenshot Here)

### Dashboard

(Add Screenshot Here)

### Product Management

(Add Screenshot Here)

### Add Product Page

(Add Screenshot Here)

### Edit Product Page

(Add Screenshot Here)

---

## 🔮 Future Improvements

* Password Hashing with Bcrypt
* Multi-User Authentication
* Product Image Uploads
* Sales Management Module
* Inventory Reports
* Export Data to Excel/PDF
* React Frontend Version
* Analytics Dashboard Charts

---

## 👨‍💻 Author

### Hamid Nadeem

Software Engineering Student
Superior University, Lahore

**GitHub:** https://github.com/hamidnadeem043

**LinkedIn:** https://linkedin.com/in/hamid-nadeem043

**Live Demo:** https://inventory-management-system-production-1962.up.railway.app

---

⭐ If you found this project useful, consider giving it a star on GitHub.
