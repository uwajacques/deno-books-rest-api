import { Collection } from "https://deno.land/x/filedb/mod.ts";
import books from "../database/fileDB.ts"
import { IBook } from "../types/index.ts";

interface IResponse {
  success: boolean;
  message?: string;
  data: Collection<IBook> | IBook | null | undefined;
}


interface IRequestParams {
  isbn: string;
  bookTitle: string;
  author: string;
}



export default {
  getBooks: ({ response }: { response: any }) => {
    let responseBody: IResponse = {
      success: true,
      data: books,
    };

    if (!books) {
      responseBody = {
        success: false,
        message: `No books found`,
        data: null,
      };
    }
    response.body = responseBody;
  },
  getBook: (
    { response, params }: {
      response: any;
      params: { isbn: string };
    },
  ) => {
    const book: IBook | undefined  = books.findOne({id: params.isbn});

    let responseBody: IResponse = {
      success: true,
      data: book
    };

    if (!book) {
      response.status = 404;
      responseBody = {
        success: false,
        message: `No book found with isbn: ${params.isbn}`,
        data: null,
      };
    }
    response.body = responseBody;
  },
  addBook: () => {},
  updateBook: () => {},
  deleteBook: () => {},
};
