import { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="flex justify-center items-center gap-10 ml-auto mr-auto">
        <input
          type="text"
          name="search field"
          className="border-neutral-900 border-1 rounded-md pl-4 pr-4 pt-1.5 pb-1.5"
        />
        <button className="border-neutral-900 border-1 rounded-md pl-4 pr-4 pt-1 pb-1 text-neutral-950 text-xl">
          Search
        </button>
      </div>
    );
  }
}
