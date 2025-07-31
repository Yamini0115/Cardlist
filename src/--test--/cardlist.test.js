import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Cardlist from '../cardlist';

test('renders the heading and virtualized grid', () => {
  render(<Cardlist />);
  expect(screen.getByText(/Home Products lists/i)).toBeInTheDocument();
});

test('show scroll-to-top button after scrolling and scrolls to tap on click',()=>{
    render(<Cardlist />);
    const scrollButton=screen.queryByRole('button',{name:/top/i});
    expect(scrollButton).not.toBeInTheDocument();
    fireEvent.scroll(window,{target:{scrollY:400}});

    setTimeout(()=>{
        const newBtn=screen.queryByRole("button",{name:/top/i});
        expect(newBtn).toBeInTheDocument();

        fireEvent.click(newBtn);
        expect(window.scrollY.toBe(0))
    },100);
})

test('only render visible cards using virtual scrolling',()=>{
  render(<Cardlist />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.queryByText('product 999')).not.toBeInTheDocument();
})

test('renders product images in cards', () => {
  render(<Cardlist />);

  const images = screen.queryAllByRole('img', { name: /product image/i });
  expect(images.length).toBeGreaterThan(0);
  expect(images[0]).toHaveAttribute('src');
  expect(images[0]).toHaveAttribute('alt','product image');
});
