import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path to enquiries store
const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(ENQUIRIES_FILE)) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), "utf-8");
}

// 1. API: Submit an enquiry
app.post("/api/enquiries", (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      pickupLocation,
      destination,
      travelDate,
      passengers,
      serviceType,
      message,
    } = req.body;

    // Basic validation
    if (!fullName || !phoneNumber || !pickupLocation || !destination || !travelDate) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Load existing
    const fileContent = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    const enquiries = JSON.parse(fileContent);

    // Create item
    const newEnquiry = {
      id: "enq_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      fullName,
      phoneNumber,
      email: email || "",
      pickupLocation,
      destination,
      travelDate,
      passengers: parseInt(passengers) || 1,
      serviceType: serviceType || "Local Taxi",
      message: message || "",
      status: "Pending",
      timestamp: new Date().toISOString(),
    };

    enquiries.unshift(newEnquiry); // Add to the top
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");

    // Email simulation logging
    console.log("========================================");
    console.log("EMAIL SIMULATION: enquiry received!");
    console.log(`To: radhinpulikkuth@gmail.com`);
    console.log(`To: owner@ameliatoursandtravels.com`);
    console.log(`Subject: New Kerala Taxi Booking Enquiry from ${fullName}`);
    console.log(`--- Details ---`);
    console.log(`Name: ${fullName}`);
    console.log(`Phone: ${phoneNumber}`);
    console.log(`Route: ${pickupLocation} -> ${destination}`);
    console.log(`Date: ${travelDate} | Passengers: ${passengers || 1}`);
    console.log(`Service: ${serviceType}`);
    console.log(`Message: ${message || "None"}`);
    console.log("========================================");

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will contact you soon on WhatsApp or phone.",
      data: newEnquiry,
    });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return res.status(500).json({ error: "Failed to store enquiry." });
  }
});

// 2. API: Get all enquiries (for the admin panel check)
app.get("/api/enquiries", (req, res) => {
  try {
    const fileContent = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    const enquiries = JSON.parse(fileContent);
    return res.json({ enquiries });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return res.status(500).json({ error: "Failed to retrieve enquiries." });
  }
});

// 3. API: Delete or complete an enquiry (admin manage)
app.delete("/api/enquiries/:id", (req, res) => {
  try {
    const { id } = req.params;
    const fileContent = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    let enquiries = JSON.parse(fileContent);

    enquiries = enquiries.filter((item: any) => item.id !== id);
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");

    return res.json({ success: true, message: "Enquiry deleted successfully." });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return res.status(500).json({ error: "Failed to delete enquiry." });
  }
});

app.patch("/api/enquiries/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const fileContent = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    const enquiries = JSON.parse(fileContent);

    const index = enquiries.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      enquiries[index].status = status || "Contacted";
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
      return res.json({ success: true, data: enquiries[index] });
    }

    return res.status(404).json({ error: "Enquiry not found." });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    return res.status(500).json({ error: "Failed to update enquiry." });
  }
});

// Setup Vite Dev Server / Static Ingress
async function initializeApp() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully running on http://0.0.0.0:${PORT}`);
  });
}

initializeApp().catch((err) => {
  console.error("Error initializing Express and Vite server:", err);
});
