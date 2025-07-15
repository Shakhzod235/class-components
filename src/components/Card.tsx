import { Component } from 'react';
import type { CardProps } from '../types/global';

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="flex justify-between items-center w-full pl-4 bg-white border-1 border-neutral-900 will-change-transform not-hover:transform-none not-hover:will-change-auto transition-transform duration-200 hover:scale-110">
        <p>{this.props.name}</p>
        <img src={this.props.description} className="size-25" />
      </div>
    );
  }
}
