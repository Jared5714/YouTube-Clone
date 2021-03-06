import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDmnsb_JA3DAOC-uwfQKaqZ3K-Em_oHs5E';

// Create new component. Produce some HTML.
class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [], 
            selectedVideo: null,
        };
        
        this.videoSearch('batman');
    }
    
    videoSearch(term){
        
        YTSearch({key: API_KEY, term: term, maxResults: 50, part: 'snippet'}, videos => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
            console.log(videos);
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        
        
        
        return (
        <div>
            <SearchBar
            onSearchTermChange = {term => this.videoSearch(term)}/>
            
            <VideoDetail video = {this.state.selectedVideo}/>
            
            <VideoList 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
            
        </div>
        );
    }
}


// Take component's HTML and show in DOM.

ReactDOM.render(<App />, document.querySelector('.container'));