import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtubeAPI';
import VideoList from './VideoList';

class App extends React.Component{
    state = { videos: [] }
    onTermSubmit = async e =>{
        const response = await youtube.get('/search',{
            params:{
                q: e
            }
        });

        this.setState({ videos: response.data.items })
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;