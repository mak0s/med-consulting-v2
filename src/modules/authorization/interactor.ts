import { IAuthService } from 'services/auth';
import { User } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { autorun } from 'mobx';

import { IAuthStore } from 'stores/auth';
import { auth } from 'server';

interface IPayload {
  authStore: IAuthStore;
  authService: IAuthService;
  signInForm: boolean;
  signUpForm: boolean;
}

export interface IAuthInteractor {
  user: User | null;
  signUp: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  children: {
    signIn: boolean;
    signUp: boolean;
  };
}

const useAuthorizationInteractor = ({
  authStore,
  authService,
  signInForm,
  signUpForm,
}: IPayload): IAuthInteractor => {
  const [user, setUser] = useState<IAuthInteractor['user']>(null);

  useEffect(() => {
    const subscription = autorun(() => {
      const user = authStore.user;

      setUser(user);
    });

    return subscription;
  }, []);

  const signUp = useCallback(
    async (email: string, password: string) => {
      try {
        const user = await authService.signUp(auth, email, password);

        authStore.setUser(user);
      } catch (e) {
        console.log(e);
      }
    },
    [authService, authStore]
  );

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const user = await authService.signIn(auth, email, password);

        authStore.setUser(user);
      } catch (e) {
        console.log(e);
      }
    },
    [authService, authStore]
  );

  const signOut = useCallback(async () => {
    await authService.signOut(auth);
    authStore.setUser(null);
  }, [authService]);

  return {
    user,
    signUp,
    signIn,
    signOut,
    children: {
      signIn: signInForm,
      signUp: signUpForm,
    },
  };
};

export default useAuthorizationInteractor;
