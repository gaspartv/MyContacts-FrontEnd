export interface iContextProps {
  children: React.ReactNode;
}

export interface iLoadContext {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iClientContext {
  client: iClient | null;
  setClient: React.Dispatch<React.SetStateAction<iClient | null>>;
}

export interface iClient {
  id: string;
  email: string;
  name: string;
  registered_at: string;
  tel: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  tel: string;
  repeatPassword?: string;
}
