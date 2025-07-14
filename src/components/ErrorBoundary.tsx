import React, { Component, type ReactNode } from 'react';

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    console.error('Ошибка поймана в getDerivedStateFromError:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Ошибка поймана в ErrorBoundary:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute top-0 left-0 right-0 text-center mt-20">
          <p className="text-xl text-red-600">Что-то пошло не так.</p>
          <button
            onClick={this.handleReset}
            className="mt-4 border px-4 py-2 rounded hover:bg-gray-200"
          >
            Сбросить
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
