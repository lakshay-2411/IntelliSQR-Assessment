import React from "react";
import FormPage from "./pages/FormPage";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <FormPage />
    </>
  );
};

export default App;
