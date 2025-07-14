import { Component } from 'react';

type Props = {
  name: string;
  description: string;
};

export class Card extends Component<Props> {
  render() {
    return (
      <div className="flex justify-between gap-4 w-full">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
