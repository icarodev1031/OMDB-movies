import { screen, within,fireEvent } from "@testing-library/react";
import  store  from '../store';
import SearchResult from '../views/Home/SearchResult'
import {fetchMoviesAsync} from '../store/movies/movieSlice'
import {renderWithRouterProvider} from './../testUtils'

describe('search movies', ()=>{
    it('should return no result with no keyword',async()=>{
      const param ={s:'',page:1};
      await store.dispatch(fetchMoviesAsync(param));
      const {movies} = store.getState();
      expect(movies.data.length).toEqual(0);
      renderWithRouterProvider(<SearchResult/>);
      expect(screen.getByText(/No movies fetched/i)).toBeInTheDocument();
    });
    
    it('should return results with keyword',async()=>{
      const param={s:'sam', page:1};
      await store.dispatch(fetchMoviesAsync(param));
      const {movies} = store.getState();
      expect(movies.data.length).toEqual(10);
      renderWithRouterProvider(<SearchResult/>);
      expect(screen.getAllByRole(/movie/)).toHaveLength(10);
    });

    it('should disable nominate button',()=>{
      renderWithRouterProvider(<SearchResult/>);
      const actual = screen.getByText(/I am Sam/i);
      expect(actual).toBeInTheDocument();
      const buttonElement = within(actual.parentElement.parentElement).getByRole('button')
      expect(buttonElement).not.toBeDisabled();
      fireEvent.click(buttonElement);
      expect(buttonElement).toBeDisabled();
    })

    it('should handle pagination',async()=>{
      renderWithRouterProvider(<SearchResult/>);
      const nextButton = screen.getByTitle(/Go to next page/i)  
      fireEvent.click(nextButton);
      expect(screen.getByText(/11–20/)).toBeInTheDocument();
      fireEvent.click(nextButton);
      expect(screen.getByText(/21–30/)).toBeInTheDocument();

      const lastButton = screen.getByTitle(/Go to last page/);
      fireEvent.click(lastButton);
      const movieList = screen.getAllByRole('movie');
      expect(movieList).not.toHaveLength(0);

    })
  })