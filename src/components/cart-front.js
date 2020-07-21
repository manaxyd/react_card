import React, {Component} from 'react';

export default class CardFront extends Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xs-6">
                            <img src="./img/plane.jpg" />
                        </div>
                        <div className="col-xs-6 side-front-content">
                            <h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}