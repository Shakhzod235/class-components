import { Component } from 'react';
import { Card } from './Card';

interface CardInfo {
  id: number;
  name: string;
  species: string;
}

interface State {
  cards: CardInfo[];
}

const API_URL = 'https://rickandmortyapi.com/api/character';

export class CardList extends Component<{}, State> {
  state: State = {
    cards: [],
  };

  async componentDidMount(): Promise<void> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const data = await response.json();
      console.log(data);
      this.setState({
        cards: data.results,
      });
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error(`Ошибка загрузки: ${error.message}`);
    }
  }

  render() {
    return (
      <div className="flex justify-center flex-col items-center w-100">
        {this.state.cards.length !== 0 && (
          <div className="flex justify-between w-full">
            <h3>Character Name</h3>
            <h3>Character Species</h3>
          </div>
        )}
        {this.state.cards.length !== 0 ? (
          this.state.cards.map((card) => (
            <Card key={card.id} name={card.name} description={card.species} />
          ))
        ) : (
          <h1>Empty List</h1>
        )}
      </div>
    );
  }
}
