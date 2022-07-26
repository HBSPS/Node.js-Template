import express from "express";

const PORT = 3000;

const handleListening = () => {
    console.clear();
    console.log(`✅ Server listening on port ${PORT}`);
};

express().listen(PORT, handleListening);