import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index", { cssFile: "styles.css" });
});

app.get("/login", (req, res) => {
    res.render("login", { cssFile: "login.css" });
});

app.get("/register", (req, res) => {
    res.render("register", { cssFile: "login.css" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});