import { Router } from 'https://deno.land/x/oak/mod.ts'
import BooksCtrl from './controllers/bookCtrl.ts';

const router = new Router()
router.get('/books', BooksCtrl.getBooks)
      .get('/book/:isbn', BooksCtrl.getBook)
      .post('/book',  BooksCtrl.addBook)
      .put('/book/:isbn',  BooksCtrl.updateBook)
      .delete('/book/:isbn',  BooksCtrl.deleteBook)

export default router