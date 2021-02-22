import { Router } from 'https://deno.land/x/oak/mod.ts'
import BooksCtrl from './controllers/bookCtrl.ts';

const router = new Router()
router.get('/books', BooksCtrl.getBooks)
      // .get('/books/:isbn', BooksCtrl.getBook)
      // .post('/books',  BooksCtrl.addBook)
      // .put('/books/:isbn',  BooksCtrl.updateBook)
      // .delete('/books/:isbn',  BooksCtrl.deleteBook)

export default router