import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './router.ts'

const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on:  http://localhost:${Deno.env.get('PORT')}`)
await app.listen(`${Deno.env.get('HOST')}:${Deno.env.get('PORT')}`)
