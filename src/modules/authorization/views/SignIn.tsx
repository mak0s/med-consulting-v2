import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import { Container, Box, TextField, Button, Typography } from 'components';
import { ISignInFormFields } from '../types';

export interface IProps {
  onSubmit: ({ email, password }: ISignInFormFields) => void;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email required')
    .email('Please, enter valid email'),
  password: yup
    .string()
    .required('Password required')
    .min(6, 'Password should be longer or equal 8 symbols'),
});

const SignIn = ({ onSubmit }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<ISignInFormFields>({
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = (fields: ISignInFormFields) => {
    onSubmit(fields);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            textAlign: 'center',
          }}
        >
          Sign in
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            label="Email"
            type="text"
            {...register('email')}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            {...register('password')}
            sx={{ mb: 2 }}
          />
          <Button
            onClick={handleSubmit(submitHandler)}
            size="large"
            variant="contained"
            disabled={false}
            sx={{
              mx: 3,
              mb: 2,
            }}
          >
            Sign in
          </Button>
          <Link href="/sign-up">
            <Typography>Do not have an account? Sign up</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
