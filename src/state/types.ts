export type ChatRoles = 'user' | 'assistant'

export interface IMessage{
    role:ChatRoles,
    content:string
}
export interface IHistory{
    id:string
    timestamp:string
    title:string
}
