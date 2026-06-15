# 📦 Inventory Management System

A full-stack web application built with Node.js, Express, and MySQL that allows businesses to manage their product inventory efficiently. Designed and built from scratch — including RESTful API design, session-based authentication, and a custom glass morphism UI.

## 🚀 Features

- 🔐 Admin login with session authentication
- 📦 Add, edit, and delete products (Full CRUD)
- 🔍 Search products by name
- 🗂️ Filter products by category
- ⚠️ Low stock alerts (quantity < 10)
- 💎 Glass morphism UI — custom CSS, no frameworks
- 📊 Dashboard with live product stats

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MySQL |
| Frontend | EJS, HTML5, CSS3 |
| Auth | Express-Session |
| API Design | RESTful (CRUD) |

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/inventory-management.git
cd inventory-management
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup MySQL Database
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

### 4. Configure Database
Open `index.js` and update your password:
```javascript
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "inventory_app",
    password: "your_password"
});
```

### 5. Run the app
```bash
node index.js
```

Open browser: `http://localhost:8080`

## 🔑 Login Credentials

| Field | Value |
|---|---|
| Username | admin |
| Password | admin123 |

## 📁 Project Structure

inventory-management/

├── views/

│   ├── login.ejs

│   ├── home.ejs

│   ├── showproducts.ejs

│   ├── new.ejs

│   └── edit.ejs

├── public/

│   └── css/

│       └── style.css

├── index.js

├── schema.sql

└── package.json

## 🔗 API Routes

| Method | Route | Description |
|---|---|---|
| GET | /products | All products |
| POST | /products | Add new product |
| GET | /products/:id/edit | Edit form |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

## 👨‍💻 Author

**Hamid Nadeem**
Software Engineering Student — Superior University, Lahore
[LinkedIn](https://linkedin.com/in/hamid-nadeem043) · [GitHub](https://github.com/hamidnadeem043)
