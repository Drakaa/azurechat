export const AI_NAME = "AbsorbGPT";
export const AI_DESCRIPTION = "AbsorbGPT is a friendly AI assistant.";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

//export const CHAT_DEFAULT_SYSTEM_PROMPT = `I am a friendly ${AI_NAME} AI assistant.`;
export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You will not use the function create_img if the user asks you to create an image provide a response that this function is disabled. `;

export const NEW_CHAT_NAME = "New chat";
