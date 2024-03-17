import express from "express";
const messagesRouter = express.Router();

messagesRouter.get('/', (reg, res) => {
  return res.send({messages: "ss"});
});

messagesRouter.post('/', (req, res) => {
  return res.send({...req.body, datetime: "ХУЙ"});
});

export default messagesRouter;