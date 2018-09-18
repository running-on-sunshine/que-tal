import React from 'react';

class WassupFormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            newWassup: ''
        }
    }

    render() {
        let updateWassup = (message) => {
            this.setState({ newWassup: message })
        }

        return <WassupForm {...this.props}
            newWassup={this.state.newWassup}
            updateWassup={updateWassup}
        />
    }
}

let WassupForm = (props) =>
    <form 
        className='wassup-form'
        onSubmit={ (event) => {
            event.preventDefault();
            props.addWassup(props.newWassup);
            } 
        }>
        <input
            type='text'
            className='wassup-form-input'
            placeholder='Share Wassup!'
            value={props.newWassup}
            onChange={ (event)  => {
                props.updateWassup(event.target.value)
                } }
        />
        <button 
            className='wassup-form-submit' 
            type='submit'>Post!
        </button>
    </form>

export default WassupFormWrapper;