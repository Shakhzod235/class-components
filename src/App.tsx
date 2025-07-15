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
    shouldThrow: false,
    errorMessage: '',
  };

  getCardsList = async (url: string) => {
    try {
      await new Promise((res) => setTimeout(res, 2000));
      const response = await fetch(url);

      if (response.status === 404) {
        this.setState({
          isLoading: false,
          shouldThrow: true,
          errorMessage: 'Персонажи не найдены',
        });
        return;
      }
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const data = await response.json();
      this.setState({
        cards: data.results,
        isLoading: false,
        loadError: false,
      });
    } catch {
      this.setState({
        isLoading: false,
        loadError: true,
        shouldThrow: true,
      });
    }
  };

  buildQueryURL = (name: string | null): string => {
    const params = new URLSearchParams();
    if (name && name.trim() !== '') {
      params.append('name', name.trim());
    }
    return `${API_URL}/?${params.toString()}`;
  };

  componentDidMount(): void {
    const savedQuery = localStorage.getItem('name');
    const queryURL = this.buildQueryURL(savedQuery);
    this.getCardsList(queryURL);
  }

  throwError = () => {
    this.setState({
      cards: [],
      loadError: true,
    });
    this.setState({ shouldThrow: true });
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
    const queryURL = this.buildQueryURL(query);
    this.getCardsList(queryURL);
  };
  setLoading = () => {
    this.setState({
      isLoading: true,
    });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error(`${this.state.errorMessage}`);
    }
    return (
      <>
        <Header
          inputRef={inputRef}
          searchCharacters={this.searchCharacters}
          setLoading={this.setLoading}
        />
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
