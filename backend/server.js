import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server up and running..."));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Define route for the root path
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Todo App API! auto reload');
});

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is up and running on port ${PORT}`);
// });
