import { Component } from 'react';
import { Card } from './Card';
import type { CardsProps } from '../types/global';

export class CardList extends Component<CardsProps> {
  render() {
    return (
      <div className="flex justify-center flex-col items-center w-[1200px]">
        <div className="w-full h-[860px] grid grid-cols-3 gap-6">
          {this.props.isLoading ? (
            <h2 className="flex items-start col-start-2 justify-center text-2xl">
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
          ) : (
            this.props.cards.map((card) => (
              <Card key={card.id} name={card.name} description={card.image} />
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
