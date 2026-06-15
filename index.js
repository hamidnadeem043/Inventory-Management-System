const express = require("express");
const app = express();
const mysql = require('mysql2');
const path = require("path");
const methodoverride = require("method-override");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const { faker } = require('@faker-js/faker');

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(session({
    secret: "inventory_secret_key",
    resave: false,
    saveUninitialized: false,
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "inventory_app",
    password: "iamalpha)(1)"
});

const isLoggedIn = (req, res, next) => {
    if (!req.session.user) return res.redirect("/login");
    next();
};

app.get("/login", (req, res) => {
    if (req.session.user) return res.redirect("/");
    res.render("login.ejs", { error: null });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    
    const ADMIN_USER = "Hamid";
    const ADMIN_PASS = "iamalpha";

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        req.session.user = { username: ADMIN_USER };
        return res.redirect("/");
    }
    res.render("login.ejs", { error: "Invalid username or password" });
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});


app.get("/", isLoggedIn, (req, res) => {
    let q = "SELECT count(*) AS total FROM products";
    let lowQ = "SELECT count(*) AS low FROM products WHERE quantity < 10";

    connection.query(q, (err, result) => {
        if (err) return res.send(err);
        let count = result[0].total;

        connection.query(lowQ, (err2, result2) => {
            if (err2) return res.send(err2);
            let lowStock = result2[0].low;
            res.render("home.ejs", { count, lowStock, user: req.session.user });
        });
    });
});


app.get("/products", isLoggedIn, (req, res) => {
    let { category, search } = req.query;
    let q = "SELECT * FROM products WHERE 1=1";
    let params = [];

    if (category && category !== "all") {
        q += " AND category = ?";
        params.push(category);
    }
    if (search) {
        q += " AND name LIKE ?";
        params.push(`%${search}%`);
    }

    connection.query(q, params, (err, products) => {
        if (err) return res.send(err);
        res.render("showproducts.ejs", { products, category, search, user: req.session.user });
    });
});


app.get("/products/new", isLoggedIn, (req, res) => {
    res.render("new.ejs", { user: req.session.user });
});

app.post("/products", isLoggedIn, (req, res) => {
    let { name, category, quantity, price } = req.body;
    let id = faker.string.uuid();
    let q = `INSERT INTO products (id, name, category, quantity, price) VALUES (?, ?, ?, ?, ?)`;

    connection.query(q, [id, name, category, quantity, price], (err) => {
        if (err) return res.send(err);
        res.redirect("/products");
    });
});


app.get("/products/:id/edit", isLoggedIn, (req, res) => {
    let { id } = req.params;
    connection.query(`SELECT * FROM products WHERE id = ?`, [id], (err, result) => {
        if (err) return res.send(err);
        res.render("edit.ejs", { product: result[0], user: req.session.user });
    });
});

app.patch("/products/:id", isLoggedIn, (req, res) => {
    let { id } = req.params;
    let { name, category, quantity, price } = req.body;
    let q = `UPDATE products SET name=?, category=?, quantity=?, price=? WHERE id=?`;

    connection.query(q, [name, category, quantity, price, id], (err) => {
        if (err) return res.send(err);
        res.redirect("/products");
    });
});


app.delete("/products/:id", isLoggedIn, (req, res) => {
    let { id } = req.params;
    connection.query(`DELETE FROM products WHERE id = ?`, [id], (err) => {
        if (err) return res.send(err);
        res.redirect("/products");
    });
});

app.listen("8080", () => {
    console.log("Server is running on port 8080");
});