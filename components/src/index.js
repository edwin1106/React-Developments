import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sam
                    </a>
                    <div className="metadata">
                        <span className="date"> Hoy a las 9:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sam
                    </a>
                    <div className="metadata">
                        <span className="date"> Hoy a las 9:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sam
                    </a>
                    <div className="metadata">
                        <span className="date"> Hoy a las 9:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))