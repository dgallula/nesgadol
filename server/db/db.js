
   import mysql from 'mysql2';

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

   