import express from "express";
import messagesRouter from "./routers/messages";

const app = express();

const port = 8000;
const localhost = `http://localhost:${port}`;

app.use(express.json());
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Server running at ${localhost}`);
})