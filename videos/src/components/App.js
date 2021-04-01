import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtubeAPI';

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
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}
export default App;