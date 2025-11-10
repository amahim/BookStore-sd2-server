import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";

// Sample books data
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publishYear: 1997,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    publishYear: 1945,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publishYear: 2003,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishYear: 1988,
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    publishYear: 2005,
  },
];

// Seed function
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoDBURL);
    console.log("✅ Connected to MongoDB");

    // Clear existing books
    await Book.deleteMany({});
    console.log("🗑️  Cleared existing books");

    // Insert new books
    const result = await Book.insertMany(books);
    console.log(`✅ Successfully added ${result.length} books to the database`);

    // Display added books
    console.log("\n📚 Books added:");
    result.forEach((book, index) => {
      console.log(
        `${index + 1}. "${book.title}" by ${book.author} (${book.publishYear})`
      );
    });

    // Close connection
    await mongoose.connection.close();
    console.log("\n✅ Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
