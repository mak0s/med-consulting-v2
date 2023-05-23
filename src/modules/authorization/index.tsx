import { useStores } from 'stores';
import useAuthorizationInteractor from './interactor';
import AuthRouter from './router';
import { useServices } from 'services';

interface IConsultantProps {
  signInForm?: boolean;
  signUpForm?: boolean;
}

const Authorization = ({
  signInForm = false,
  signUpForm = false,
}: IConsultantProps) => {
  const { authStore } = useStores();
  const { authService } = useServices();
  const interactor = useAuthorizationInteractor({
    authStore,
    authService,
    signInForm,
    signUpForm,
  });

  return <AuthRouter interactor={interactor} />;
};

export default Authorization;
