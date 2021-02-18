import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 9:00Pm"
                    image={faker.image.image()}
                    text="I like this!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jack"
                    date="Yesterday at 2:00Pm"
                    image={faker.image.image()}
                    text="Nice blog post!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    auhtor="Carl"
                    date="Today at 11:00Am"
                    image={faker.image.image()}
                    text="This is great!" />
            </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector("#root"))