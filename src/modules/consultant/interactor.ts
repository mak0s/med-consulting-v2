import { useCallback, useState, useEffect } from 'react';

import { IChatService } from 'services/chat';
import { IConsultantStore } from 'stores/consultant';

interface IPayload {
  chatService: IChatService;
  consultantStore: IConsultantStore;
}

export interface IConsultantInteractor {
  getAnswer: (question: string) => Promise<string | null>;
  loadingResponse: boolean;
  children: {
    consultantView: boolean;
  };
}

const useConsultantInteractor = ({
  chatService,
  consultantStore,
}: IPayload): IConsultantInteractor => {
  const [loadingResponse, setLoadingResponse] = useState(false);

  const getAnswer: IConsultantInteractor['getAnswer'] = useCallback(
    async (question) => {
      try {
        setLoadingResponse(true);
        const response = await chatService.getAnswer(question);
        setLoadingResponse(false);
        const data = await response.json();

        return data.result as string;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [chatService]
  );

  useEffect(() => {
    const init = async () => {
      const prompts = await chatService.getPrompts();

      consultantStore.setPrompts(prompts);
    };

    init();
  }, [chatService]);

  return {
    getAnswer,
    loadingResponse,
    children: {
      consultantView: true,
    },
  };
};

export default useConsultantInteractor;
