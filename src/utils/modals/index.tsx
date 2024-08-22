import { tokens } from '@styles/token.css';
import {
  useModalsDispatchContext,
  useModalsStateContext,
} from '@utils/modals/context';
import ReactModal from 'react-modal';

const Modals = () => {
  const openedModals = useModalsStateContext();
  const { close } = useModalsDispatchContext();

  return openedModals.map(modal => {
    const { Component, props, id, isOpen } = modal;
    const { onSubmit, ...restProps } = props;

    const handleClose = () => {
      close(id);
    };

    const handleSubmit = async (data?: unknown) => {
      if (typeof onSubmit === 'function') {
        try {
          await onSubmit?.(data);
        } catch (error) {
          console.error(error);
        } finally {
          handleClose();
        }
      }
    };

    return (
      <ReactModal
        key={id}
        isOpen={!!isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: '#37373733',
            zIndex: tokens.zIndex['z-index-modal'],
          },
          content: {
            width: '800px',
            height: '450px',
            inset: 'unset',
            margin: '50vh auto',
            padding: 0,
            transform: 'translateY(-50%)',
            position: 'relative',
          },
        }}
      >
        <Component
          {...restProps}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </ReactModal>
    );
  });
};

export default Modals;
