import express from "express";
import writeFile from "../writeFile";
import readDir from "../readDir";
import {Message} from "../type";

const messagesRouter = express.Router();

messagesRouter.get("/", async (_reg, res) => {
  const data: Message[] | undefined = await readDir();
  if (data) {
    return res.send(data);
  } else {
    return res.send({error: "Not found"});
  }
});

messagesRouter.post("/", async (req, res) => {
  const addMessage = await writeFile({message: req.body.message});
  return res.send(addMessage);
});

export default messagesRouter;