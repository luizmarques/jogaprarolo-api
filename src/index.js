import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import router from './router/index.js';
dotenv.config()

const port = 3001;
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});