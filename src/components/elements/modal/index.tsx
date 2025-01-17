const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-slate-50 rounded-lg max-w-md w-full p-8">
        <h1 className="text-6xl font-semibold mb-4">Success!</h1>
        <p className="mb-6">Your message has been sent</p>
        <button
          onClick={onClose}
          className="bg-cyan-400 text-xl font-semibold px-8 py-2 rounded-2xl shadow-lg hover:-translate-y-2 hover:text-slate-50 active:bg-cyan-600 duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
