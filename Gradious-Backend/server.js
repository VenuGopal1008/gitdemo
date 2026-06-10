const app = require("./app");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Get port from .env file
const PORT = process.env.PORT_NUM || 4001;

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});