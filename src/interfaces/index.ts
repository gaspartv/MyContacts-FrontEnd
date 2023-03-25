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

  contacts: iClient[];
  setContacts: React.Dispatch<React.SetStateAction<iClient[]>>;

  newContactModel: boolean;
  setNewContactModel: React.Dispatch<React.SetStateAction<boolean>>;

  editClientModel: boolean;
  setEditClientModel: React.Dispatch<React.SetStateAction<boolean>>;

  editContactModel: boolean;
  setEditContactModel: React.Dispatch<React.SetStateAction<boolean>>;

  deleteContactModel: boolean;
  setDeleteContactModel: React.Dispatch<React.SetStateAction<boolean>>;

  deleteClientModel: boolean;
  setDeleteClientModel: React.Dispatch<React.SetStateAction<boolean>>;

  contactId: iClient;
  setContactId: React.Dispatch<React.SetStateAction<iClient>>;

  logout: () => void;
}

export interface iClient {
  id: string;
  email: string;
  name: string;
  registered_at: string;
  tel: string;
}

export interface iEditClient {
  name?: string;
  email?: string;
  password?: string;
  tel?: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  tel: string;
  repeatPassword?: string;
}

export interface iContact {
  name: string;
  email: string;
  tel: string;
}

export interface iEditContact {
  name?: string;
  email?: string;
  tel?: string;
}
