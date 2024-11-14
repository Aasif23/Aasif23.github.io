import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Chat from './components/Chat';
import GreetingSequence from './components/GreetingSequence';

export default function App() {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <>
      {showGreeting && <GreetingSequence onComplete={() => setShowGreeting(false)} />}
      <div className={`min-h-screen bg-gray-900 text-white ${showGreeting ? 'hidden' : ''}`}>
        <Header />
        <main>
          <Portfolio />
        </main>
        <SocialLinks />
        <Chat />
      </div>
    </>
  );
}