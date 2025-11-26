import { z } from "zod";

export const CategorySchema = z.enum(["fiction", "non-fiction", "biography", "history", "science", "technology", "philosophy", "religion", "art", "music", "dance", "theater", "film", "tv", "comics", "manga", "anime", "other"]);



export const BooksSchema = z.object({
    bookId: z.uuid(),
  bookName: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
  category: CategorySchema,
  publisher: z.string(),
  dateReleased: z.date(),
  popularity: z.number(),
});

export type BooksType = z.infer<typeof BooksSchema>;