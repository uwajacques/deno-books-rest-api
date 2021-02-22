import { Document } from "https://deno.land/x/filedb/mod.ts";

export interface IBook extends Document { 
    isbn: string;
    author?: string;
    title?: string;
}
