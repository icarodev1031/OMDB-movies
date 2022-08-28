import React from 'react';
import  store  from './store';
import App from './App';
import { screen, within , fireEvent, act, waitFor, waitForElement, findAllByRole} from "@testing-library/react";
import { fetchMoviesAsync } from './store/movies/movieSlice';
import {renderWithProvider } from './testUtils';

describe('handle movies loader',()=>{
  it('should render App',()=>{
    renderWithProvider(<App/>);
  });

  it('should lock nominates list when the item number is 5', async()=>{
    const param ={s:'sam', page:1};
    store.dispatch(fetchMoviesAsync(param));
    renderWithProvider(<App/>);
    const movieList = await screen.findAllByRole(/movie/)
    movieList.forEach(async(movie, index)=>{
        var nominateBtn = within(movie).getByRole('button');
        fireEvent.click(nominateBtn);
    });
    expect(screen.getAllByRole(/nominated/)).toHaveLength(5)
    expect(screen.getByText(/Nomination list is full!/i)).toBeInTheDocument()
  })
})
