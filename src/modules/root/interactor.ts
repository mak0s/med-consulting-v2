interface Props {}

interface IRootInteractor {
  children: {
    consultant: boolean;
  };
}

const useRootInteractor = ({}: Props): IRootInteractor => {
  return {
    children: {
      consultant: true,
    },
  };
};

export default useRootInteractor;
