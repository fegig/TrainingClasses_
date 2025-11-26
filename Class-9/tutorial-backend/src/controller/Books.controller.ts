import { Context, Hono } from "hono";
import { Books } from "@/model/Books.model";
import { paginationResponse } from "@/functions/global";
import { BooksType } from "@/schema/Books.schema";

const booksController = new Hono();

booksController.get("/", (c: Context) => {
  const page = c.req.query("page") || 1;
  const limit = c.req.query("limit") || 10;
  const bookName = c.req.query("bookName") || "";
  const tags = c.req.query("tags") || "";
  const author = c.req.query("author") || "";
  const category = c.req.query("category") || "";
  const publisher = c.req.query("publisher") || "";
  const dateReleased = c.req.query("dateReleased") || "";
  const popularity = c.req.query("popularity") || "";


  const filteredBooks = Books.filter((book: BooksType) => {
    return book.bookName.toLowerCase().includes(bookName.toLowerCase()) && 
    book.tags.some((tag: string) => tag.toLowerCase().includes(tags.toLowerCase())) &&
    book.author.toLowerCase().includes(author.toLowerCase()) &&
    book.category.toLowerCase().includes(category.toLowerCase()) &&
    book.publisher.toLowerCase().includes(publisher.toLowerCase()) &&
    book.dateReleased.toISOString().toLowerCase().includes(dateReleased.toLowerCase()) &&
    book.popularity.toString().toLowerCase().includes(popularity.toLowerCase());
  });


  const relatedBooks = Books.filter((book: BooksType) => {
    return book.tags.some((tag: string) => filteredBooks.some((filteredBook: BooksType) =>
         filteredBook.tags.some((filteredTag: string) => filteredTag.toLowerCase().includes(tag.toLowerCase())) &&
         filteredBook.bookId !== book.bookId));
  });
  return c.json({ books: paginationResponse( filteredBooks, page, limit ), relatedBooks: paginationResponse( relatedBooks, page, limit ) });
});

export default booksController;



