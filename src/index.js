import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const UV = require('react-proptypes-url-validator');
console.log(UV);
class FNR extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loaded: false,
            data: null,
            error: null
        }
    }
    static propTypes = {
        method: PropTypes.oneOf(['get', 'post']),
        url: UV,
        component: PropTypes.element.isRequired,
        loadingComponent: PropTypes.element,
        errorComponent: PropTypes.element
    }
    static defaultProps = {
        method: 'get'
    }
    componentDidMount() {
        let {method, url, data} = this.props;
        let $ = this;
        axios({
            method,
            url,
            data
        }).then(res => {
            let newState = {};
            // Always a log is needed for debug 😐
            console.log(res);
            newState.loaded = true;
            const {status} = res;
            if (status === 200) {
                newState.error = null;
                newState.data = res.data;
            } else {
                newState.data = null;
                newState.error = res.status;
            }
            $.setState(newState)
        })
    }
    render () {
        // const {error, data, loaded} = this.state;
        if (this.state.loaded) {
            if (!this.state.error) {
                return this.props.component(this.state.data, this.props.url)
            } else {
                return this.props.errorComponent || <div>Error</div>
            }
        } else {
            return this.props.loadingComponent || <div>Loading...</div>
        }
    }
}

export default FNR;
