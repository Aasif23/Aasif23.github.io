import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { useChat } from '../../hooks/useChat';

export default function Chat() {
  const { state, toggleChat, processMessage } = useChat();

  return (
    <>
      <ChatButton isOpen={state.isOpen} onClick={toggleChat} />
      <AnimatePresence>
        {state.isOpen && (
          <ChatWindow
            state={state}
            onClose={toggleChat}
            onSendMessage={processMessage}
          />
        )}
      </AnimatePresence>
    </>
  );
}