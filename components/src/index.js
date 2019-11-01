import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () =>{
    return(
        <div className="ui container comments">
            <CommentDetail autor="Autor 1" fecha="Hoy a las 9:00Pm" image={faker.image.avatar()}/>
        </div>
    );

};

ReactDOM.render(<App/>, document.querySelector("#root"))