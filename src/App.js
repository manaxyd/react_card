import React, {Component} from 'react';
import CardBack from './components/cart-back';
import CardFront from './components/cart-front';

class App extends Component {
    render() {
        return(
            <div className='card-container'>
                <div className='card-body'>
                    <CardFront />
                    <CardBack />
                </div>
            </div>

        )
    }
}

export default App;