import { Component } from 'react';
import { Search } from './Search';

export class Header extends Component {
  render() {
    return (
      <header className="mt-50">
        <div className="container">
          <Search />
        </div>
      </header>
    );
  }
}
