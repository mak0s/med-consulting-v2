import { useServices } from 'services';
import useConsultantInteractor from './interactor';
import ConsultantRouter from './router';
import ConsultantView from './view';
import useAuthorizationInteractor from 'modules/authorization/interactor';
import { useStores } from 'stores';

interface IConsultantProps {}

const Consultant = ({}: IConsultantProps) => {
  const { chatService, authService } = useServices();
  const { authStore, consultantStore } = useStores();
  const interactor = useConsultantInteractor({ chatService, consultantStore });
  const authInteractor = useAuthorizationInteractor({
    authStore,
    authService,
    signInForm: false,
    signUpForm: false,
  });

  return (
    <ConsultantRouter
      interactor={interactor}
      authInteractor={authInteractor}
      consultantStore={consultantStore}
      ConsultantView={ConsultantView}
    />
  );
};

export default Consultant;
