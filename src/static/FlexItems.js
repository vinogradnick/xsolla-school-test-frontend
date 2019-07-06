import React from 'react';
function FlexItems(props) {
    const items=props.children;
    return (
        <div className="lists">
            {items}
        </div>
    )
}
export default FlexItems;
