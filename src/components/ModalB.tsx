import { Button, Modal } from "antd";
import React from "react";
import { ModalHandleProps, useModalHandle } from "react-modal-handle";

function ModalB(props: ModalHandleProps) {
  const { onClose } = props;

  const { closeModal, closeAllModal } = useModalHandle();

  return (
    <Modal
      title={"Modal B"}
      open={true}
      maskClosable={false}
      onCancel={onClose}
    >
      <Button onClick={() => closeModal("modal-a")}>Close Modal A</Button>
      <Button onClick={() => closeAllModal()}>Close all Modal</Button>
    </Modal>
  );
}

export default ModalB;
