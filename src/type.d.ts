export interface ApiMessage {
  message: string,
}
export interface Message extends ApiMessage {
  datetime: string,
}