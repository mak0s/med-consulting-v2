import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { auth } from 'server';
import { IAuthStore } from 'stores/auth';

interface Props {
  authStore: IAuthStore;
}

interface IRootInteractor {
  children: {
    consultant: boolean;
    authorization: boolean;
  };
}

const useRootInteractor = ({ authStore }: Props): IRootInteractor => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        authStore.setUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return {
    children: {
      consultant: router.pathname === '/',
      authorization:
        router.pathname === '/sign-in' || router.pathname === '/sign-up',
    },
  };
};

export default useRootInteractor;
