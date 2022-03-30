   import mysql from 'mysql2';
   import express from 'express';
   import cors from 'cors';

   const app = express();

   app.use(express.json());

   //app.use('/api' , customerRouter)

   app.listen(5000, ()=> {
       console.log('running on  port 5000')
   })
   



































   // connection to mysql
   
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       database: 'cms',
       password: 'Aa123456!'
   })
   
    
   connection.query(
       'SELECT * from customers',
      (error,results)=> {
       if (error) {
           console.log(error)
       }else {
         console.log(results)
       }
     });
