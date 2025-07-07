import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { IHistory, IMessage } from './types';
import axios from 'axios';
import axiosInstance from './axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createUniqId from '../funcs/createUniqId';


export interface IChatContext{
    messages:IMessage[]
    sendMessage:(chatId:string,text:string) => void
    getChatHistory:(id:string) => void
    getAllHistories:() => void
    isReqLoading:boolean
    history:IHistory[]
    isChatLoading:boolean
    shouldRefreshHistory:boolean
    isHistoryLoading:boolean
};
interface props{
    children:ReactNode
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

export const ChatProvider = ({children}:props) => {
    const [isReqLoading,setIsReqLoading] = useState<boolean>(false)
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [history,setHistory] = useState([])
    const [isHistoryLoading,setIsHistoryLoading] = useState<boolean>(true)
    const [isChatLoading,setIsChatLaoding] = useState<boolean>(false)
    const [shouldRefreshHistory, setShouldRefreshHistory] = useState(true);
    // CHAT -----------------------------------------------------------------
    const postRequest = async (chatId:string,messages:IMessage[]) => {
      try{
        setIsReqLoading(true)
        const res = await axiosInstance.post("chat/completions", {
          model: "llama-3.3-70b-versatile",
          messages: messages,
        });
        const data = res.data
        const answer = data?.choices?.length > 0 && data?.choices[0]?.message
        if (answer) {
          const newRes = {role:answer.role,content:answer.content}
          
          
          const newMessages = [...messages, newRes];
          setMessages(newMessages);
          setIsReqLoading(false);
          if(chatId){
            updateHistory(chatId, newMessages);
          }
        }
        
      }catch(e){

      }finally{
        setIsReqLoading(false);
      }
    }

    const createNewHistory = async (chatId:string,newMessages:IMessage[],title:string) => {
      // {id,time,title}
      const res = await AsyncStorage.getItem('history')
      let historyMarks = res ? JSON.parse(res) : null
  
      if(!historyMarks){
        const newHistoryElem = {id:chatId,timestamp:new Date().toISOString(),title}
        await AsyncStorage.setItem("history", JSON.stringify([newHistoryElem]));
    
      }else{
        const newHistoryElem = {id:chatId,timestamp:new Date().toISOString(),title}
        await AsyncStorage.setItem("history", JSON.stringify([...historyMarks,newHistoryElem]));
        
      }
      await AsyncStorage.setItem(chatId, JSON.stringify(newMessages));
      console.log('lala')
      setShouldRefreshHistory(true)
    }

    const sendMessage = async (chatId:string,content:string) => {
      
      const newMessage:IMessage = {role:"user",content}
      const newMessages = [...messages, newMessage];
      const historyById = await AsyncStorage.getItem(chatId)
      console.log('hbyid: ',historyById)
      if(!historyById){
        console.log('yes')
        await createNewHistory(chatId, newMessages,content);
      }

      setMessages(newMessages);
      postRequest(chatId,newMessages);
    }

    // HISTORY ------------------------------------------------
    const getChatHistory = async (id:string) => {
      setIsChatLaoding(true);
      const data = await AsyncStorage.getItem(id)
  
      
      if(data){
        setMessages(JSON.parse(data))

      }else{
        setMessages([]);
      }
      setIsChatLaoding(false);
    }

    const getAllHistories = async () => {
      setIsHistoryLoading(true)
      const data = await AsyncStorage.getItem('history');
      if(data){
        const history = JSON.parse(data)
        setHistory(history)
        setShouldRefreshHistory(false)
      }
      setIsHistoryLoading(false);
    }

    const updateHistory = async (chatId: string, newMessages: IMessage[]) => {
      const oldHistory = await AsyncStorage.getItem(`${chatId}`);
      if (oldHistory) {
        
        await AsyncStorage.setItem(chatId, JSON.stringify(newMessages));
      } else {
      }
    };
  return (
    <ChatContext.Provider value={{ messages, isReqLoading,history,isChatLoading,shouldRefreshHistory,isHistoryLoading, sendMessage,getChatHistory,getAllHistories }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useHistory = () => {
    const context = useContext(ChatContext);
    if (!context) {
      throw new Error('context not found');
    }
    return context;
};

