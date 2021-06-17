import { Collection } from "https://deno.land/x/filedb/mod.ts";
import books from "../database/fileDB.ts"
import { IBook } from "../types/index.ts";
interface IResponseBody {
  success: boolean;
  message?: string;
  data: Collection<IBook> | IBook | null | undefined;
}

export default {
  getBooks: ({ response }: { response: any }) => {
    let responseBody: IResponseBody = {
      success: true,
      data: books,
    };

    if (!books) {
      response.status = 404;
      responseBody = {
        success: false,
        message: `No books found`,
        data: null,
      };
    }
    return response.body = responseBody;
  },
  getBook: (
    { response, params }: {
      response: any;
      params: { isbn: string };
    },
  ) => {
    const book: IBook | undefined  = books.findOne({isbn: params.isbn});

    let responseBody: IResponseBody = {
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
    return response.body = responseBody;
  },
  addBook: async ({ response, request }: {
    response: any;
    request: any;
  }) => {
    const result = request.body({ type: "json" });
    const json = await result.value;

    const book = await books.insertOne(json)

    return response.body = book;
  },
  updateBook: async ({ response, request, params }: {
    response: any;
    request: any;
    params: { isbn: string };
  }) => {
    const result = request.body({ type: "json" });
    const json = await result.value;

    books.updateOne({isbn: params.isbn}, json)

    return response.body = {success: true, data: json};
  },
  deleteBook: ({ response, params }: {
    response: any;
    params: { isbn: string };
  }) => {
    books.deleteOne({isbn: params.isbn})
    return response.body = {success: true, message: "Book deleted"};
  },
};
