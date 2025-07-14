import { Component } from 'react';
import { Search } from './Search';

export class Header extends Component {
  render() {
    return (
      <header className="mt-30">
        <div className="container">
          <Search />
        </div>
      </header>
    );
  }
}
