import { ReactNode, forwardRef } from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}
const Modal = ({ open, handleClose, children, sx, ...other }: IProps) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    sx={[{ '& .MuiPaper-root': { p: 3 } }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...other}
  >
    {children}
  </Dialog>
);

export default Modal;
