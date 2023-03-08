import ModalA from "@/components/ModalA";
import ModalB from "@/components/ModalB";
import { Button } from "antd";
import { useModalHandle, withModalHandle } from "react-modal-handle";

const ModalAWithHandle = withModalHandle(ModalA, "modal-a");
const ModalBWithHandle = withModalHandle(ModalB, "modal-b");

export default function Home() {
  const { openModal } = useModalHandle();

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
      <Button onClick={() => openModal("modal-a")}>Open Modal A</Button>

      <Button onClick={() => openModal("modal-b")}>Open Modal B</Button>
      <ModalAWithHandle content="Content" />
      <ModalBWithHandle />
    </div>
  );
}
