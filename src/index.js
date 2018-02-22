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
        method: PropTypes.oneOf(['get', 'post', 'head', 'connect', 'put', 'patch', 'delete', 'options', 'trace']),
        url: UV,
        component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
        loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        errorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        config: PropTypes.object
    }
    static defaultProps = {
        method: 'get',
        loadingComponent: (props) => {
            return <span></span>
        },
        errorComponent: (props) => {
            return <span></span>;
        },
        config: {}
    }
    fetch = () => {
        let {method, url, data, config} = this.props;
        method = method.toUpperCase();
        let fullConfig = Object.assign(config, {
            url,
            data,
            method
        });
        let newState = {};
        axios(fullConfig).then(res => {
            let _res = Object.assign(res, {url});
            newState.loaded = true;
            newState.error = null;
            newState.data = _res;
            this.setState(newState)
        }).catch(error => {
            const _error = Object.assign(error, {url});
            newState.loaded = true;
            newState.data = null;
            newState.error = _error;
            this.setState(newState)
        })
    }
    componentDidMount() {
        this.fetch()
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.url !== this.props.url) {
            this.fetch();
        }
        return true;
    }
    render () {
        const {loaded, error, data} = this.state;
        if (loaded) {
            if (!error) {
                return this.props.component(data)
            } else {
                return this.props.errorComponent(error)
            }
        } else {
            return this.props.loadingComponent(this.props.url)
        }
    }
}

export default FNR;
