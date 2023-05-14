import { useForm } from 'react-hook-form';

import { Button, TextField } from 'components';
import { FIELD_NAME } from './constants';

import type { FormFields } from './types';

export interface IConsultantViewProps {
  onSubmit: ({ question }: FormFields) => void;
  answer: string | null;
}

const ConsultantView = ({ onSubmit, answer }: IConsultantViewProps) => {
  const { register, handleSubmit } = useForm<FormFields>();
  console.log(answer);
  return (
    <div>
      <main>
        <h3>How can I help you?</h3>
        <TextField {...register(FIELD_NAME)} />
        <Button onClick={handleSubmit(onSubmit)} size="large">
          Submit question
        </Button>
        <div>{answer}</div>
      </main>
    </div>
  );
};

export default ConsultantView;
