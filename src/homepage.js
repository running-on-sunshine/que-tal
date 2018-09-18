import React from 'react';
import PageHeader from './page-header';
import WassupList from './wassup-list';
import WassupFormWrapper from './wassup-form';
import generateId from './generate-id';

class HomepageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        };
    }
    
    getWassups() {
        fetch('http://0.tcp.ngrok.io:11140/wassups.json')
            .then(res => res.json())
            .then(wassups => {
                this.setState({ wassups: wassups });
            });
        }

    render() {
        let addWassup = (newWassup) => {
            this.setState({
               wassups: this.state.wassups.concat([
                   {
                    id: generateId(),
                    content: newWassup
                   }
                ])
            });
        }
        return <Homepage {...this.props}
            addWassup={addWassup}
            wassups={this.state.wassups}
        />
    };

    componentDidMount() {
        this.getWassups();
    }
};

let Homepage = (props) => 
    <div className='homepage'>
        <PageHeader />
        <button className='get-wassups' onClick={() => props.getWassups()}>Get Wassups</button>
        <WassupFormWrapper addWassup={props.addWassup} />
        <WassupList wassups={props.wassups} />
    </div>

export default HomepageContainer;