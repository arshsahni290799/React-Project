import React,{Component} from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';
class Landing extends Component
{
    render()
    {
       const {loading}=this.props;
        return(//container is a bootstrap class for styling the size of the component
            <div className="container">

            <SearchForm/>
            {loading? <Spinner/> : <MoviesContainer/>}
        </div>
        //loading is true then spinner will ocur otherwise it will redirect to moviesContainer
        );
    }

    
}
const mapStateToProps = state => ({
    loading: state.movies.loading
  });
  
  export default connect(mapStateToProps)(Landing);


