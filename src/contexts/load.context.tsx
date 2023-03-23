import React from "react";
import { Loading } from "../components/load.components";
import { iContextProps, iLoadContext } from "../interfaces";

export const LoadContext = React.createContext({} as iLoadContext);

const LoadProvider = ({ children }: iContextProps) => {
  const [load, setLoad] = React.useState<boolean>(false);

  return (
    <LoadContext.Provider value={{ load, setLoad }}>
      {load && <Loading />}
      {children}
    </LoadContext.Provider>
  );
};

export default LoadProvider;
