import ModalContent from "./ModalContent";
import { useState } from "react";

const ModalWrap = () => {
  const [open, setOpen] = useState(false);
  const handleModalState = () => setOpen(!open);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleModalState}
        type="button"
        className="bg-indigo-600 text-white font-mono text-base px-7 py-2 border border-indigo-500 rounded-sm uppercase hover:shadow-xl hover:shadow-indigo-600/50 hover:-translate-y-1 transition-all ease-in"
      >
        Place Order
      </button>

      <ModalContent handleModalState={handleModalState} open={open} />
    </div>
  );
};

export default ModalWrap;
