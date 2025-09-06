const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  if (!req.session.todos) {
    req.session.todos = [];
  }
  next();
});

app.get("/api/todos", (req, res) => {
  res.json(req.session.todos);
});

app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Task text required" });

  const todo = { id: Date.now(), text, completed: false };
  req.session.todos.push(todo);
  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = req.session.todos.find(t => t.id == id);
  if (!todo) return res.status(404).json({ error: "Not found" });

  todo.completed = !todo.completed;
  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  req.session.todos = req.session.todos.filter(t => t.id != id);
  res.json({ success: true });
});

app.delete("/api/todos", (req, res) => {
  req.session.todos = [];
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
