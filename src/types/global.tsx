export interface CardInfo {
  image: string;
  id: number;
  name: string;
  species: string;
}

export interface CardProps {
  name: string;
  description: string;
}

export interface CardsProps {
  cards: CardInfo[];
  isLoading: boolean;
  loadError: boolean;
  throwError: () => void;
}

export interface CardListState {
  cards: CardInfo[];
  isLoading: boolean;
  loadError: boolean;
  shouldThrow: boolean;
  errorMessage: string;
  charactersNum: number;
}

export interface SearchProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  searchCharacters: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setLoading: () => void;
}
