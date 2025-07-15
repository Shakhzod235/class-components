import { Component } from 'react';
import { CardList } from './CardList';
import type { CardsProps } from '../types/global';

export class Main extends Component<CardsProps> {
  render() {
    return (
      <main className="mt-10 mb-10">
        <div className="container flex justify-center items-center">
          <CardList
            cards={this.props.cards}
            isLoading={this.props.isLoading}
            loadError={this.props.loadError}
            throwError={this.props.throwError}
          />
        </div>
      </main>
    );
  }
}
