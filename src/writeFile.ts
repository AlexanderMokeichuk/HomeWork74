import {promises as fs} from 'fs';
import {ApiMessage, Message} from "./type";

const writeFile = async (message: Message) => {
  const date = new Date();
  const newDate = date.toISOString();

  const newMessage: Message = {
    ...message,
    datetime: newDate,
  }
  try {
    await fs.writeFile(`./src/messages/${newDate}.txt`, JSON.stringify(message, null, 2),);
    return newMessage;
  } catch (er) {
    console.log(er)
  }
}

export default writeFile;