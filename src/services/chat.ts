import { ChatResponceError } from 'exceptions/chat-error';
import { collection, getDocs } from 'firebase/firestore';
import { IPrompt } from 'interfaces/prompts';
import { db } from 'server';
import { chatApiPath } from 'utils/constants';

export interface IChatService {
  getAnswer: (question: string) => Promise<Response>;
  getPrompts: () => Promise<IPrompt[]>;
}

export class ChatService implements IChatService {
  getAnswer: IChatService['getAnswer'] = async (question) => {
    const response = await fetch(chatApiPath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.status !== 200) {
      throw new ChatResponceError();
    }

    return response;
  };
  getPrompts: IChatService['getPrompts'] = async () => {
    const snapshot = await getDocs(collection(db, 'prompts'));

    const prompts = await Promise.all(
      snapshot.docs.map(async (p) => {
        const prompt = p.data();

        return prompt;
      })
    );

    return prompts as IPrompt[];
  };
}
