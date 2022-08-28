import movieReducer, {
    set,
    remove,
    fetchMoviesAsync
} from '../../store/movies/movieSlice';
import * as api from '../../api';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {initialState as RootState, currState} from '../../mocks/mockState';

const mockStore = configureStore([thunk])
jest.mock("../../api",()=>{
    return {
        async fetchMovies(param){
            if (param.s == '') return {totalResults:0, Search:[]}
            return {
                totalResults:2, 
                Search:[
                        {
                            Title:"I Am Sam",
                            Year:"2001",
                            imdbID:"tt0277027",
                            Type:"movie",
                            Poster:"https://m.media-amazon.com/images/M/MV5BYzEyNzc0NjctZjJiZC00MWI1LWJlOTMtYWZkZDAzNzQ0ZDNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                        },
                        {
                            Title:"Summer of Sam",
                            Year:"1999",
                            imdbID:"tt0162677",
                            Type:"movie",
                            Poster:"https://m.media-amazon.com/images/M/MV5BNjdjMDQ4ZjctYmQzNS00NjYwLWFhNTQtMGM0YmJjMmE5YmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                        }
                    ]
            }
        }
    }
});

test("fetchMovies API should work",async()=>{
    const param =  { s:'ram', page:5 };
    await api.fetchMovies(param);
});

describe('movie reducer', () => {
    
    it('should return the initial state when passed an empty action',()=>{
        const initialState = undefined;
        const action = {type:""};
        const result = movieReducer(initialState, action);
        expect(result).toEqual({
            totalResults:0,
            data:[]
        });
    });

    it('should handle set in movieSlice',()=>{
        const initialState = undefined;
        const payload = {name:'sam',type:'movie'};
        const action = set(payload);
        const result = movieReducer(initialState, action)
        
        expect(result.name).toEqual('sam');
    });
    it('should handle remove in movieSlice',()=>{
        const actual = movieReducer(currState.movies, remove(currState.movies[0]));
        expect(actual.data.length).toEqual(2);
    });

});

describe("thunks",()=>{
    describe("fetchMovieThunk should dispatch",()=>{
        it("should fetch movie", async()=>{
            const dispatch = jest.fn();
            const param ={ s: 'sam', page: 1};
            const thunk = fetchMoviesAsync(param)
            await thunk(dispatch, ()=>RootState, undefined);

            const {calls} = dispatch.mock;
            expect(calls).toHaveLength(3);
            expect(calls[0][0].type).toEqual("movies/fetch/pending");
            expect(calls[1][0].type).toEqual("movies/set");
            expect(calls[2][0].type).toEqual("movies/fetch/fulfilled");
            expect(calls[1][0].payload.totalResults).toEqual(2);
        })
    })

    describe("fetchMovieThunk redux store", ()=>{
        it("should fetch movie", async()=>{
            const store= mockStore(RootState);
            await store.dispatch(fetchMoviesAsync({s:'', page:1}));
            const actions = store.getActions();
            
            expect(actions).toHaveLength(3);
            expect(actions[0].type).toEqual("movies/fetch/pending");
            expect(actions[1].type).toEqual("movies/set");
            expect(actions[2].type).toEqual("movies/fetch/fulfilled");
            expect(actions[1].payload.totalResults).toEqual(0);
        })
    })
})

