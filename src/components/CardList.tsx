import { Component } from 'react';
import { Card } from './Card';
import type { CardsProps } from '../types/global';

export class CardList extends Component<CardsProps> {
  render() {
    return (
      <div className="flex justify-center flex-col items-center w-125">
        <div className="w-full h-[530px] flex items-center flex-col justify-start">
          <div className="flex justify-between w-full mb-6">
            <h3>Character Name</h3>
            <h3>Character Species</h3>
          </div>
          {this.props.isLoading && (
            <h2 className="flex items-center justify-center text-2xl">
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
          )}
          {this.props.loadError ? (
            <h2 className="text-2xl">Ошибка при загрузке данных</h2>
          ) : this.props.cards.length === 0 && !this.props.isLoading ? (
            <h2 className="text-2xl">Ничего не найдено</h2>
          ) : (
            this.props.cards.map((card) => (
              <Card key={card.id} name={card.name} description={card.species} />
            ))
          )}
        </div>
        <button
          className="self-end mt-4 pt-2 pb-2 pl-4 pr-4 border-1 border-neutral-900 rounded-md cursor-pointer hover:bg-neutral-200 text-lg"
          onClick={this.props.throwError}
        >
          Throw Error
        </button>
      </div>
    );
  }
}
