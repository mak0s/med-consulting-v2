import { useState, useCallback } from 'react';

import { IConsultantInteractor } from './interactor';
import type { FormFields } from './types';

interface IProps {
  interactor: IConsultantInteractor;
  ConsultantView: any;
}

const ConsultantRouter = ({ interactor, ConsultantView }: IProps) => {
  const [answer, setAnswer] = useState<string | null>(null);
  const onSubmit = useCallback(
    async ({ question }: FormFields) => {
      const answer = await interactor.getAnswer(question);
      console.log(answer);
      setAnswer(answer);
    },
    [interactor]
  );

  if (interactor.loadingResponse) {
    return <div>Генерую відповідь...</div>;
  }

  return (
    <>
      {interactor.children.consultantView && (
        <ConsultantView onSubmit={onSubmit} answer={answer} />
      )}
    </>
  );
};

export default ConsultantRouter;
