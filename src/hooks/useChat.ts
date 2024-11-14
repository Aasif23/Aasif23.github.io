import { useState, useCallback } from 'react';
import type { Message, ChatState } from '../types/chat';
import { chatResponses } from '../data/chatResponses';
import { getLocalizedGreeting } from '../utils/timeUtils';

const TYPING_DELAY = 1000;

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isOpen: false,
    isTyping: false,
  });

  const toggleChat = useCallback(() => {
    setState(prev => {
      if (!prev.isOpen && prev.messages.length === 0) {
        // Add initial greeting when opening for the first time
        return {
          ...prev,
          isOpen: true,
          messages: [{
            id: Date.now().toString(),
            type: 'bot',
            content: getLocalizedGreeting(),
            timestamp: new Date()
          }]
        };
      }
      return { ...prev, isOpen: !prev.isOpen };
    });
  }, []);

  const getRandomResponse = (intent: string): string => {
    const intentResponses = chatResponses.find(r => r.intent === intent);
    if (!intentResponses) return chatResponses[0].responses[0];
    return intentResponses.responses[Math.floor(Math.random() * intentResponses.responses.length)];
  };

  const addMessage = useCallback((content: string, type: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }, []);

  const processMessage = useCallback(async (message: string) => {
    addMessage(message, 'user');
    setState(prev => ({ ...prev, isTyping: true }));

    const lowercaseMsg = message.toLowerCase();
    let response = '';

    // Enhanced intent matching for ML topics
   if (lowercaseMsg.includes('project') || lowercaseMsg.includes('work')) {
      response = getRandomResponse('projects');
    } else if (lowercaseMsg.includes('skill') || lowercaseMsg.includes('tech')) {
      response = getRandomResponse('skills');
    } else {
      response = "I can help you explore Profile, skills, projects, or technical skills. Let me know what you'd like to dive into, and I’ll guide you with insights or resources related to machine learning!";
    }

    await new Promise(resolve => setTimeout(resolve, TYPING_DELAY));
    addMessage(response, 'bot');
    setState(prev => ({ ...prev, isTyping: false }));
  }, [addMessage]);

  return {
    state,
    toggleChat,
    processMessage,
  };
};