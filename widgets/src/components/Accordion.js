import React, { useState } from 'react';

const Accordion = ({items}) => {

    const [activeIndex,setActiveindex] = useState(null);

    const onTitleClick = (index) => {
        setActiveindex(index)
    }

    const renderedItems = items.map((item,index) => {

        const active = index === activeIndex ? 'active' : '';
        return (
        <React.Fragment key={item.title}>
            <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );

    });
    return (
        <>
        <div className="ui styled accordion">{renderedItems}</div>
        <div>{activeIndex}</div>
        </>

    );
};

export default Accordion;