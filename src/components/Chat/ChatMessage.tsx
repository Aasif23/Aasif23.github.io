import React from 'react';
import { User, Bot } from 'lucide-react';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-600' : 'bg-gray-700'
      }`}>
        {isBot ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
      </div>
      
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isBot ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'
      }`}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
}