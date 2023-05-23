import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Box, Button, Container, TextField, Typography } from 'components';
import { SendIcon } from 'components/icons';
import { FIELD_NAME } from './constants';

import type { FormFields } from './types';
import { useUser } from 'stores';

export interface IConsultantViewProps {
  onSubmit: ({ question }: FormFields) => void;
  onSignOut: () => void;
  answer: string | null;
  loading: boolean;
}

const ConsultantView = ({
  onSubmit,
  onSignOut,
  answer,
  loading,
}: IConsultantViewProps) => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<FormFields>();

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
      {!user && (
        <Button
          component={Link}
          href="/sign-in"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        >
          Log In
        </Button>
      )}
      {user && (
        <Button
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
          onClick={onSignOut}
        >
          Log out
        </Button>
      )}

      <Box>
        <Box
          sx={{
            textAlign: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 3 }}>
            How can I help you?
          </Typography>
          <TextField
            multiline
            minRows={3}
            {...register(FIELD_NAME)}
            sx={{ mb: 2 }}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            size="large"
            variant="contained"
            endIcon={<SendIcon />}
            disabled={loading}
            sx={{
              mx: 3,
            }}
          >
            Submit question
          </Button>
        </Box>
        {answer && (
          <Box
            sx={{
              border: '1px solid grey',
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography>{answer}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ConsultantView;
