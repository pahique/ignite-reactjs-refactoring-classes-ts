import { KeyboardEvent, MouseEvent, ReactNode, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps extends ReactModal.Props {
  isOpen: boolean;
  setIsOpen: (event: MouseEvent<Element> | KeyboardEvent<Element>) => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};
