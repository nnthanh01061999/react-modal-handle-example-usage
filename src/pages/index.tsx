import ModalA from "@/components/ModalA";
import ModalB from "@/components/ModalB";
import { Button, Space } from "antd";
import { useModalHandle } from "react-modal-handle";

export default function Home() {
  const { openModal, isModalOpen } = useModalHandle();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Space>
        <Button onClick={() => openModal("modal-a")}>Open Modal A</Button>
        <Button onClick={() => openModal("modal-b")}>Open Modal B</Button>
        <p>Modal A is opened: {isModalOpen("modal-a") ? "Yes" : "No"}</p>
      </Space>
      <ModalA content="Content" />
      <ModalB />
    </div>
  );
}
