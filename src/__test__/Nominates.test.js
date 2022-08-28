import { screen, fireEvent } from "@testing-library/react";
import  store  from '../store';
import Nominates from '../views/Home/Nominates'
import {add as addToNominates} from '../store/nominates/nominatesSlice'
import {fetchMoviesAsync} from '../store/movies/movieSlice'
import {renderWithRouterProvider} from './../testUtils'

describe('handle nomination', ()=>{
    it('should contain plain text', ()=>{
        renderWithRouterProvider(<Nominates/>);
        expect(screen.getByText(/No records found/i)).toBeInTheDocument();
    });
    it('should move to Nominated List', async()=>{
        const param={s:'sam', page:1};
        await store.dispatch(fetchMoviesAsync(param));

        const movie = store.getState().movies.data[0];
        store.dispatch(addToNominates(movie));

        renderWithRouterProvider(<Nominates/>);
        expect(screen.getByText(/1 nominated movies/i)).toBeInTheDocument();
    });
    it('should be removed from nominated component', async()=>{
        renderWithRouterProvider(<Nominates/>);
        const nominateElement = screen.getByLabelText('delete');
        expect(nominateElement).not.toBeDisabled();

        fireEvent.click(nominateElement);
        expect(screen.getByText(/No records found/i)).toBeInTheDocument();
    });
  })
  
  