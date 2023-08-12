import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });

  it('renders the hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByRole('img');
    expect(heroImage).toBeInTheDocument();
  });

  it('Loads the image on the page correctly', () => {
    render(<Hero />);
    const heroImage = screen.getByRole('img');
    expect(heroImage).toHaveAttribute(
      'src',
      'https://unsplash.com/photos/g51F6-WYzyU'
    );
  });
});
