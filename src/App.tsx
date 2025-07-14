import { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import type { CardListState } from './types/global';
import React from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

const inputRef = React.createRef<HTMLInputElement>();

export class App extends Component<unknown, CardListState> {
  state: CardListState = {
    cards: [],
    isLoading: true,
    loadError: false,
  };

  getCardsList = async (url: string) => {
    try {
      await new Promise((res) => setTimeout(res, 2000));
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const data = await response.json();
      this.setState({
        cards: data.results,
        isLoading: false,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Ошибка загрузки: ${error.message}`);
      }

      this.setState({
        isLoading: false,
        loadError: true,
      });
    }
  };

  componentDidMount(): void {
    const savedQuery = localStorage.getItem('name');
    const params = new URLSearchParams();
    if (savedQuery) {
      params.append('name', savedQuery);
    }
    const queryURL = `${API_URL}/?${params.toString()}`;

    this.getCardsList(queryURL);
  }

  throwError = () => {
    this.setState({
      cards: [],
      loadError: true,
    });
    throw new Error('Ошибка при загрузке данных');
  };
  searchCharacters = async (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.removeItem('name');
    e.preventDefault();
    const inputValue: string | undefined = inputRef.current?.value ?? '';
    const query: string = inputValue.trim();
    localStorage.setItem('name', `${query}`);
    this.setState({
      cards: [],
    });
    const params = new URLSearchParams();

    if (query !== '') {
      params.append('name', query);
    }

    const queryURL = `${API_URL}/?${params.toString()}`;
    this.getCardsList(queryURL);
  };

  render() {
    return (
      <>
        <Header inputRef={inputRef} searchCharacters={this.searchCharacters} />
        <Main
          cards={this.state.cards}
          isLoading={this.state.isLoading}
          loadError={this.state.loadError}
          throwError={this.throwError}
        />
      </>
    );
  }
}

export default App;
