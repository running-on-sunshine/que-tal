import React from 'react';
import { connect } from 'react-redux';

// class WassupFormWrapper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//             newWassup: ''
//         }
//     }

//     render() {
//         let updateWassup = (message) => {
//             this.setState({ newWassup: message })
//         }

//         return <WassupForm {...this.props}
//             newWassup={this.state.newWassup}
//             updateWassup={updateWassup}
//         />
//     }
// }

let WassupForm = (props) =>
    <form 
        className='wassup-form'
        onSubmit={ (event) => {
            event.preventDefault();
            props.dispatch({ type: 'ADD_NEW_WASSUP' })
            // props.addWassup(props.newWassup);
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

let ConnectedWassupFormWrapper = connect(
    (state) => ({ wassups: state.newWassups })
)(WassupForm)

let ConnectedWassupForm = connect()(WassupForm);

export { ConnectedWassupFormWrapper, ConnectedWassupForm };