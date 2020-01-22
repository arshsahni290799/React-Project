import {SEARCH_MOVIE , FETCH_MOVIES,FETCH_MOVIE,LOADING} from '../actions/types';

const initialState = {
text : '',//text user will enter in the searchbar
movies :[],//the all movies from api
loading: false,//till the movie not loaded when loaded then true
movie:[]//movie which has to display from api
}
export default function (state=initialState,action)
{
    switch(action.type)
    {
        case SEARCH_MOVIE:
            return{
                   ...state,
                   text:action.payload,
                   loading:false
            };
            case FETCH_MOVIES:
                return{
                       ...state,
                       movies:action.payload,
                       loading:false
                       
                };
            case FETCH_MOVIE:
                return{
                    ...state,
                    movie:action.payload,//single movie detail is note in movies array but in movie
                    loading:false//as when the data is ready and the spinner has to be stoped so loading becomes false otherwisw it is true always
                };
                case LOADING://handels the spinnner
                return{
                    ...state,
                    loading: true
                };
        default:
            return state
    }
}



