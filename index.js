import dotenv from "dotenv";

import app from "./config/server";
import pool from "./config/database";

dotenv.config();

const PORT = process.env.SERVER_PORT;

const handleListening = () => {
    console.clear();
    console.log(`✅ Server listening on port ${PORT}\n`);
    console.log(`✅ Server URL`);
    console.log("\x1b[34m%s\x1b[0m", `[http://localhost:${PORT}]\n`);
};

app.listen(PORT, handleListening);