import { observer } from 'mobx-react-lite';
import { Modal, Typography, Stack, Box } from 'components';
import { IConsultantStore } from 'stores/consultant';

interface IProps {
  open: boolean;
  handleClose: () => void;
  consultantStore: IConsultantStore;
}

const PromptsDialog = observer(
  ({ open, handleClose, consultantStore }: IProps) => {
    const handlePromptClick = (id: string) => {
      consultantStore.setActivePromptId(id);
      handleClose();
    };

    return (
      <Modal open={open} handleClose={handleClose}>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
          }}
        >
          Prompts:
        </Typography>
        <Stack spacing={2}>
          {consultantStore.prompts?.map(({ id, text }) => (
            <Box
              key={id}
              sx={{
                border: '1px solid grey',
                borderRadius: 2,
                p: 2,
                cursor: 'pointer',
              }}
              onClick={() => handlePromptClick(id)}
            >
              <Typography variant="body2">{text}</Typography>
            </Box>
          ))}
        </Stack>
      </Modal>
    );
  }
);

export default PromptsDialog;
