import { Component } from 'react';
import { Search } from './Search';
import type { SearchProps } from '../types/global';

export class Header extends Component<SearchProps> {
  render() {
    return (
      <header className="mt-20">
        <div className="container">
          <Search
            inputRef={this.props.inputRef}
            searchCharacters={this.props.searchCharacters}
            setLoading={this.props.setLoading}
          />
        </div>
      </header>
    );
  }
}
