export const generateInterviewQuestionsPrompt = (
  role: string,
  level: string,
  techstack: string,
  type: string,
  amount: number
) => {
  return `Prepare questions for a job interview.
    The job role is ${role}.
    The job experience level is ${level}.
    The tech stack used in the job is: ${techstack}.
    The focus between behavioural and technical questions should lean towards: ${type}.
    The amount of questions required is: ${amount}.
    Please return only the questions, without any additional text.
    The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
    Return the questions formatted like this:
    ["Question 1", "Question 2", "Question 3"]
    
    Thank you! <3
  `;
};

export const getFallbackQuestions = (
  role: string,
  techstack: string,
  amount: number
) => {
  const baseQuestions = [
    `Tell me about yourself and your experience with ${techstack}`,
    `What interests you most about the ${role} role?`,
    `Describe a challenging project you worked on`,
    `How do you stay updated with new technologies?`,
    `Where do you see yourself in 5 years?`,
    `What is your greatest strength?`,
    `What is your biggest weakness?`,
    `How do you handle working under pressure?`,
    `Describe a time when you had to learn something new quickly`,
    `What motivates you in your work?`
  ];
  
  return baseQuestions.slice(0, amount);
};
