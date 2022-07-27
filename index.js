import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.SERVER_PORT;

const handleListening = () => {
    console.clear();
    console.log(`✅ Server listening on port ${PORT}`);
};

express().listen(PORT, handleListening);