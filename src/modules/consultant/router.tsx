import { useState, useCallback } from 'react';

import { IConsultantInteractor } from './interactor';
import type { FormFields } from './types';
import { IAuthInteractor } from 'modules/authorization/interactor';

interface IProps {
  interactor: IConsultantInteractor;
  authInteractor: IAuthInteractor;
  ConsultantView: any;
}

const ConsultantRouter = ({
  interactor,
  authInteractor,
  ConsultantView,
}: IProps) => {
  const [answer, setAnswer] = useState<string | null>(null);
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

  return (
    <>
      {interactor.children.consultantView && (
        <ConsultantView
          onSubmit={onSubmit}
          onSignOut={onSignOut}
          answer={answer}
          loading={interactor.loadingResponse}
        />
      )}
    </>
  );
};

export default ConsultantRouter;
