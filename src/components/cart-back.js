import React, {Component} from 'react';
import CardBtn from './cart-btn';
import CardLinks from './cart-links';
import CardTextarea from './cart-text';
import CardInput from './cart-input';

export default class CardBack extends Component {
    render() {
        return (
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Tell me something about yoursels</h1>
                    <form formAction='#' className="card-form">
                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput name='firstName' id='firstName' type='text' placeholder={'your first name'} />
                            </div>
                            <div className='col-xs-6'>
                                <CardInput name='lastName' id='lastName' type='text' placeholder={'your last name'} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput name='email' id='email' type='email' placeholder={'your email'} />
                            </div>
                            <div className='col-xs-6'>
                                <CardInput name='subject' id='subject' type='text' placeholder={'your subject'} />
                            </div>
                        </div>
                        <CardTextarea name='message' id='message' placeholder={'your message'} />
                        <CardBtn className='btn btn-primary' type='submit' value={'Send'} />
                    </form>

                    <CardLinks/>
                </div>
            </div>
        )
    }
}