import { Component } from 'react';
import type { SearchProps } from '../types/global';

export class Search extends Component<SearchProps> {
  componentDidMount() {
    const savedQuery = localStorage.getItem('name');
    if (savedQuery && this.props.inputRef.current) {
      this.props.inputRef.current.value = savedQuery;
    }
  }

  render() {
    return (
      <form
        onSubmit={this.props.searchCharacters}
        className="flex justify-center items-center gap-10 ml-auto mr-auto"
      >
        <input
          type="text"
          name="search_field"
          ref={this.props.inputRef}
          placeholder="Character's name"
          className="border-neutral-900 border-1 rounded-md pl-4 pr-4 pt-1.5 pb-1.5"
        />
        <button
          onClick={this.props.setLoading}
          className="border-neutral-900 border-1 rounded-md pl-4 pr-4 pt-1 pb-1 text-neutral-950 text-xl hover:bg-neutral-200 cursor-pointer"
        >
          Search
        </button>
      </form>
    );
  }
}
