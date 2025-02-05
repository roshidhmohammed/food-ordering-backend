const express = require("express");
const app = express();
const cors = require("cors");
const restaurants = require("./routes/restaurants");
const groceries = require("./routes/groceries");

app.use( cors({
  origin: "https://food-ordering-frontend-weld.vercel.app/",
  // origin:process.env.API_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

app.use("/api/restaurant", restaurants);
app.use("/api/grocery", groceries);

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for uncaught exception`);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: ".env",
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
