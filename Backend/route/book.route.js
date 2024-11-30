import express from "express";
import { getBooks, getBookById } from "../controller/book.controller.js";

const router = express.Router();

// Route to fetch all books
router.get("/", getBooks);

// Route to fetch a book by ID
router.get("/:id", getBookById);

export default router;
