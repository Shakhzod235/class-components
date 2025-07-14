export interface CardInfo {
  id: number;
  name: string;
  species: string;
}

export interface Props {
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
