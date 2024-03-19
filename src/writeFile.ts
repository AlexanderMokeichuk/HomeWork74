import {promises as fs} from "fs";
import {ApiMessage, Message} from "./type";
import {PATCH} from "./constants";

const writeFile = async (message: ApiMessage) => {
  if (message.message !== undefined) {
    const date = new Date();
    const newDate = date.toISOString();
    console.log(message);

    const newMessage: Message = {
      ...message,
      datetime: newDate,
    }
    try {
      await fs.writeFile(`${PATCH}/${newDate}.txt`, JSON.stringify(message, null, 2),);
      return newMessage;
    } catch (er) {
      console.log(er)
    }
  } else {
    return {
      error: "404",
    }
  }
}

export default writeFile;