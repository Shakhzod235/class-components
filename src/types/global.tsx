export interface CardInfo {
  id: number;
  name: string;
  species: string;
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
}

export interface SearchProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  searchCharacters: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
