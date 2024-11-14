export const getTimeOfDay = (): 'morning' | 'afternoon' | 'evening' | 'night' => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 22) return 'evening';
  return 'night';
};

export const getLocalizedGreeting = (): string => {
  const timeOfDay = getTimeOfDay();
  const greetings = {
    morning: "Good morning! How can I help you today?",
    afternoon: "Good afternoon! Looking to explore my work?",
    evening: "Good evening! Thanks for stopping by!",
    night: "Hi there! Late night browsing?"
  };
  return greetings[timeOfDay];
};