import { FileDB, Collection} from "https://deno.land/x/filedb/mod.ts";
import { IBook } from "../types/index.ts"

const DB = new FileDB({ rootDir: "./data", isAutosave: false });

const books: Collection<IBook> = await DB.getCollection<IBook>("books");

export default books;

