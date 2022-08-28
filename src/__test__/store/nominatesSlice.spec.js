import nominateReducer, {
    add,
    remove
} from '../../store/nominates/nominatesSlice';

describe('nominate reducer', () => {
    
    it('should handle initial state in nominateSlice',()=>{
        const initialState = undefined;
        const action ={type:''};
        const result = nominateReducer(initialState, action);
        expect(result.length).toEqual(0);
    });

    it('should handle set in nominateSlice',()=>{
        const initialState = undefined;
        const payload = {imdbID:1,name:'sam',type:'movie'};
        const action  = add(payload)
        const result = nominateReducer(initialState, action);
        expect(result.length).toEqual(1)
        expect(result[0].imdbID).toEqual(1)
    });

    it('should handle remove in nominateSlice',()=>{
        const currState = [
            {imdbID:1, name:'sam',type:'movie'},
            {imdbID:2, name:'ram',type:'movie'},
            {imdbID:3, name:'dam', type:'movie'}
        ]
        const payload = currState[0];
        const action = remove(payload)
        const actual = nominateReducer(currState, action);
        expect(actual.length).toEqual(2)
    });
   
});
