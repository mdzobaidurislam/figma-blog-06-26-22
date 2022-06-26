import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [modalShow, setmodalshow] = useState(false);
  const [modalShowSignUp, setmodalshowsignup] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        modalShow,
        setmodalshow,
        modalShowSignUp,
        setmodalshowsignup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContexts = () => useContext(GlobalContext);

export default useGlobalContexts;
