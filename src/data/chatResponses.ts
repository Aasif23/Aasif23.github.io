interface ChatResponse {
  intent: string;
  responses: string[];
}

export const chatResponses: ChatResponse[] = [
 {
    intent: 'projects',
    responses: [
      "I've worked on various web applications and design systems. Would you like to see specific examples?",
      "My portfolio includes UI/UX projects and interactive web experiences. Which type interests you?",
      "I specialize in creating responsive, user-friendly interfaces. What would you like to know more about?"
    ]
  },
  {
    intent: 'skills',
    responses: [
      "I work with React, TypeScript, and modern CSS frameworks. What specific skills interest you?",
      "My expertise includes UI design, front-end development, and design systems. Any particular area you'd like to discuss?",
      "I specialize in creating responsive layouts and interactive components. Which technology interests you most?"
    ]
  }
];