// khi gõ câu lệnh require thì nó sẽ 
//đi vào thư mục node_module để tải
const express = require('express')
// ẽpress() là 1 function và những gì mà function này trả về
// đã được 'express' viết sẵn rồi. và rồi trả về 1 instance
const app = express()
const  port = 3000;

app.get('/tin-tuc', (req,res) => res.send('Hello world'));
app.listen(port, () => console.log('Example app listening at http://localhost:3000'))