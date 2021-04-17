import { createServer } from "miragejs";

export default function () {
    let arr = [{name : 'java', id : 1}]

  createServer({
    routes() {
     this.namespace='fakeapi'
     
     this.get('/getTodos',{todos:arr})
    
      this.post('/addTodo',( res ,req )=>{
          console.log('req is', req)
          arr.push(req.requestBody)
      })
    },
  });
}
