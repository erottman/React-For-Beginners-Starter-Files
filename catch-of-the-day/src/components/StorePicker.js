import React, {Component} from 'react';

class StorePicker extends Component {
    render() {
        // An{y where else
        {/*comment */}
        return (
        <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" />
            <button type="submit">Visit Store -> </button>
            </form>
        ) 
    }
}

export default StorePicker;
