import ReactDOM from "react-dom";

const ModalContent = ({ handleModalState, open }) => {
  const handlePropagation = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <div
      className={` absolute inset-0 flex justify-center items-center 
      ${open ? "visible bg-black/10" : "invisible"}
      `}
      onClick={handleModalState}
    >
      <div
        className={`bg-white md:w-[500px] md:p-7 flex flex-col gap-y-4 rounded shadow-xl transition-all ease-in-out duration-200
         ${open ? "scale-100 opacity-100" : "scale-150 opacity-0"}
         `}
        onClick={handlePropagation}
      >
        <h1 className="uppercase text-3xl font-bold font-mono">Heading</h1>
        <p className="font-mono ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          perferendis totam et blanditiis voluptatibus. Sint enim omnis ex
          cupiditate ab.
        </p>
        <button
          onClick={handleModalState}
          type="button"
          className="self-start text-base font-mono  uppercase border border-indigo-600 px-6 py-2 rounded text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
        >
          Confirm
        </button>
      </div>
    </div>,
    document.getElementById("modalRoot")
  );
};

export default ModalContent;
