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
        component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        errorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    }
    static defaultProps = {
        method: 'get',
        loadingComponent: (props) => {
            return <div>Loading...</div>
        },
        errorComponent: (props) => {
            return <div>Error</div>;
        }
    }
    fetch = () => {
        let {method, url, data} = this.props;
        let $ = this;
        axios({
            method,
            url,
            data
        }).then(res => {
            let newState = {};
            // Always a log is needed for debug 😐
            // console.log(res);
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
    componentDidMount() {
        this.fetch()
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.forceUpdate();
        this.fetch()
        return true;
    }
    render () {
        const {loaded, error, data} = this.state;
        if (loaded) {
            if (!error) {
                return this.props.component(data, this.props.url)
            } else {
                return this.props.errorComponent()
            }
        } else {
            return this.props.loadingComponent()
        }
    }
}

export default FNR;
