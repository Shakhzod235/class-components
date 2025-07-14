import { Component } from 'react';
import { CardList } from './CardList';

export class Main extends Component {
  render() {
    return (
      <main className="mt-10">
        <div className="container flex justify-center items-center">
          <CardList />
        </div>
      </main>
    );
  }
}
