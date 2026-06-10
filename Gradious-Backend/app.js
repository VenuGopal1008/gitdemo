let express = require("express");
let authRouter = require("./routes/authRoutes");

let app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use((err, req, res, next) => {
    res.status(400).json({
        status: "failed",
        message: err.message
    });
});

module.exports = app;