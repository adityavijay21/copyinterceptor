import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CopyTextInterceptor = () => {
  useEffect(() => {
    const handleCopy = (event) => {
      event.preventDefault();
      const selection = window.getSelection();
      if (selection) {
        navigator.clipboard.writeText('🚫 Copying is restricted.')
          .then(() => toast.error('Copying is restricted.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }))
          .catch((err) => console.error('Clipboard operation failed:', err));
      }
    };

    document.addEventListener('copy', handleCopy);

    return () => document.removeEventListener('copy', handleCopy);
  }, []);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default CopyTextInterceptor;
