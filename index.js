import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser' 


const PORT = 3000;
const HOST = 'localhost/'

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(morgan('dev'));

app.get('*', (req, res, next) => {
  res.status(200)
  next()
})

app.get('/login/:name',(req, res) => {
  res.cookie('name',req.params.name)
  res.end()
})

app.get('/hello', (req, res) =>{
  res.write('Hello ' + req.cookies.name)
  res.end()
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})