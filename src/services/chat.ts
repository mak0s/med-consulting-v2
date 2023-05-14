import { ChatResponceError } from 'exceptions/chat-error';
import { chatApiPath } from 'utils/constants';

export interface IChatService {
  getAnswer: (question: string) => Promise<Response>;
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
}
