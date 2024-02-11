const pg = require("pg");
const fs = require("fs");
require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const compression = require("compression");
=======
>>>>>>> 61a6321f8a3fe0c3b6a3540cc5f57318acc90b27

// Create an Express application
const app = express();
const port = process.env.PORT;

// Enable response compression
app.use(compression());

// Set up PostgreSQL connection
const pool = new pg.Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false, // This line is used to ignore self-signed certificate issues
  },
  sslmode: "require", // Add this line for secure connection
});

try {
  pool.connect();
  console.log("Connected to the database");
} catch (err) {
  console.error("Error connecting to the database:", err.stack);
}

// Set the view engine to Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "static")));

app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.pug
app.get("/", (req, res) => {
  res.render("index.pug", { error: null, success: null });
});

const videoPath = path.join(__dirname, "static", "sources" ,"videos", "bg.mp4");

// Define a function to handle video streaming
function streamVideo(req, res) {
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);
    file.pipe(res);
  } else {
    const headers = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, headers);
    fs.createReadStream(videoPath).pipe(res);
  }
}

// Route to stream the video
app.get("/video", streamVideo);

// Create table if not exists
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contact_form (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL
    );
`;

try {
  pool.query(createTableQuery, (error, result) => {
    if (error) {
      console.error("Error creating table:", error);
    } else {
      console.log("Table created successfully");
    }
  });
} catch (err) {
  console.error("Error creating table:", err);
}

// Handle contact form submission
app.post("/contact", (req, res) => {
  const formData = req.body;
  const insertQuery =
    "INSERT INTO contact_form (name, email, subject, message) VALUES ($1, $2, $3, $4)";
  const values = [
    formData.name,
    formData.email,
    formData.subject,
    formData.message,
  ];

  try {
    pool.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.render("index", {
          success: null,
          error: "An error occurred while processing your request",
        });
      } else {
        res.render("index", {
          success: "Your message has been sent!",
          error: null,
        });
      }
    });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.render("index", {
      success: null,
      error: "An error occurred while processing your request",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
