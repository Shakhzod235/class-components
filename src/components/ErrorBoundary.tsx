import { Component, type ReactNode } from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    localStorage.removeItem('name');
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="absolute top-0 left-0 right-0 text-center mt-20">
          <p className="text-xl text-red-600">{this.state.error.message}</p>
          <button
            onClick={this.handleReset}
            className="mt-4 border-1 border-neutral-900 px-4 py-2 rounded hover:bg-neutral-200 cursor-pointer"
          >
            Сбросить
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
