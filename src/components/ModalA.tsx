import { Button, Modal } from "antd";
import React from "react";
import {
  ModalHandleProps,
  useModalHandle,
  withModalHandle,
} from "react-modal-handle";

interface ModalAProps extends ModalHandleProps {
  content: string;
}

function ModalA(props: ModalAProps) {
  const { content, onClose } = props;

  const { openModal } = useModalHandle();

  return (
    <Modal
      title={"Modal A"}
      open={true}
      maskClosable={false}
      onCancel={onClose}
    >
      <p>{content}</p>
      <Button onClick={() => openModal("modal-b")}>Open Modal B</Button>
    </Modal>
  );
}

export default withModalHandle(ModalA, "modal-a");
