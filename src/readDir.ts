import {promises as fs} from "fs";
import {Message} from "./type";

const readDir = async () => {
  try {
    const data = (await fs.readdir('./src/messages')).reverse();

    const iterations = (data.length > 5) ? 5 : data.length;
    const messages: Message[] = [];
    for (let i = 0; i < iterations; i++) {
      const response = await fs.readFile(`./src/messages/${data[i]}`);
      const responseParse = JSON.parse(response.toString());
      messages.push({
        ...responseParse,
        datetime: data[i],
      });
    }

    const newMessages: Message[] = await Promise.all(messages);
    return newMessages;
  } catch (er) {
    console.log(er)
  }
}
export default readDir;