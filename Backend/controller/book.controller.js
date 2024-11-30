import Book from "../model/book.model.js";

// Fetch all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json(error);
  }
};

// Fetch a single book by ID
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching book by ID:", error);
    res.status(500).json(error);
  }
};
