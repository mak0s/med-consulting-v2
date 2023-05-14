import { useServices } from 'services';
import useConsultantInteractor from './interactor';
import ConsultantRouter from './router';
import ConsultantView from './view';

interface IConsultantProps {}

const Consultant = ({}: IConsultantProps) => {
  const { chatService } = useServices();
  const interactor = useConsultantInteractor({ chatService });

  return (
    <ConsultantRouter interactor={interactor} ConsultantView={ConsultantView} />
  );
};

export default Consultant;
