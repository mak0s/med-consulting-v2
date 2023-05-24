import { useState, useCallback } from 'react';

import { IConsultantInteractor } from './interactor';
import type { FormFields } from './types';
import { IAuthInteractor } from 'modules/authorization/interactor';
import { IConsultantStore } from 'stores/consultant';

interface IProps {
  interactor: IConsultantInteractor;
  authInteractor: IAuthInteractor;
  consultantStore: IConsultantStore;
  ConsultantView: any;
}

const ConsultantRouter = ({
  interactor,
  authInteractor,
  consultantStore,
  ConsultantView,
}: IProps) => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onSubmit = useCallback(
    async ({ question }: FormFields) => {
      const answer = await interactor.getAnswer(question);

      setAnswer(answer);
    },
    [interactor]
  );

  const onSignOut = useCallback(async () => {
    await authInteractor.signOut();
  }, [authInteractor]);

  const onChoosePrompt = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {interactor.children.consultantView && (
        <ConsultantView
          consultantStore={consultantStore}
          answer={answer}
          loading={interactor.loadingResponse}
          isModalOpen={isModalOpen}
          onSubmit={onSubmit}
          onSignOut={onSignOut}
          onChoosePrompt={onChoosePrompt}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ConsultantRouter;
