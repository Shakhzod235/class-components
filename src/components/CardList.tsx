import { Component } from 'react';
import { Card } from './Card';

interface CardInfo {
  id: number;
  name: string;
  species: string;
}

interface State {
  cards: CardInfo[];
  isLoading: boolean;
}

const API_URL = 'https://rickandmortyapi.com/api/character';

export class CardList extends Component<unknown, State> {
  state: State = {
    cards: [],
    isLoading: true,
  };

  async componentDidMount(): Promise<void> {
    try {
      setTimeout(async () => {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);

        const data = await response.json();
        console.log(data);
        this.setState({
          cards: data.results,
          isLoading: false,
        });
      }, 1000);
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error(`Ошибка загрузки: ${error.message}`);
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div className="flex justify-center flex-col items-center w-100">
        {this.state.cards.length !== 0 && (
          <div className="flex justify-between w-full mb-6">
            <h3>Character Name</h3>
            <h3>Character Species</h3>
          </div>
        )}
        {this.state.isLoading ? (
          <h2 className="flex items-center">
            <svg
              className="mr-3 size-5 animate-spin text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </h2>
        ) : this.state.cards.length === 0 ? (
          <h2>Empty List</h2>
        ) : (
          this.state.cards.map((card) => (
            <Card key={card.id} name={card.name} description={card.species} />
          ))
        )}
      </div>
    );
  }
}
