import {promises as fs} from "fs";
import {Message} from "./type";
import {PATCH} from "./constants";

const readDir = async () => {
  try {
    const data = (await fs.readdir(PATCH)).reverse();

    const iterations = (data.length > 5) ? 5 : data.length;
    const messages: Message[] = [];
    for (let i = 0; i < iterations; i++) {
      try {
        const response = await fs.readFile(`./src/messages/${data[i]}`);
        const responseParse = JSON.parse(response.toString());
        messages.push({
          ...responseParse,
          datetime: data[i],
        });
      } catch (er) {
        console.log(er)
      }
    }

    const newMessages: Message[] = await Promise.all(messages);
    return newMessages;
  } catch (er) {
    console.log(er)
  }
}
export default readDir;