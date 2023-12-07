interface ModalProps {
  closeModal: () => void;
  selectedBook: string;
  modalAction?: () => void;
  cancel?: boolean;
}

export default function Modal({
  closeModal,
  selectedBook,
  modalAction,
  cancel,
}: ModalProps) {
  return (
    <>
      <div className="p-4 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-modal-overlay">
        <div className="mx-auto rounded container overflow-hidden shadow-lg bg-white max-w-sm p-4">
          <h1 className=" text-right p-4 cursor-pointer" onClick={closeModal}>
            close
          </h1>
          <div>
            <h1 className=" text-center  text-[18px]">
              Do you want to order{" "}
              <span className="font-semibold">{selectedBook}</span>
            </h1>
            <div className="flex flex-row justify-center mt-10">
              <button
                className="border-blue-500 border-2 text-black flex px-6 py-3 rounded-md "
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className=" bg-blue-500  text-white ml-4 flex px-6 py-3 rounded-md"
                onClick={modalAction}
              >
                {cancel ? "Cancel Order" : "Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
