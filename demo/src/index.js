import React, {Component} from 'react';
import {render} from 'react-dom';

import FNR from '../../src';

const UserInfo = (props) => {
    return <div>
        <img src={props.picture} style={{
                borderRadius: '50%',
                boxShadow: '0 2px 6px rgba(0,0,0,.4)',
                marginBottom: 16
            }} />
        <div>
            <div style={{
                    fontSize: 13,
                    opacity: .7,
                    marginBottom: 16
                }}>
                A random user, fetched from <a href="https://randomuser.me" target="_blank">random user generator</a> with <a href="https://github.com/hkh12/react-fnr" target="_blank">react-fnr</a>
            </div>
            {props.name.first + ' ' + props.name.last}
        </div>
    </div>
}

const Loading = (props) => {
    return <div>
        <h1>Loading...</h1>
    </div>
}

const ErrorComponent = (props) => {
    return <div>
        <h1>Oops, An error.</h1>
    </div>
}

class Demo extends Component {
    render() {
        return (<div>
            <main
                style={{
                    backgroundColor: '#00b85a',
                    color: '#fff',
                    fontSize: 40,
                    textTransform: 'capitalize',
                    textAlign: 'center',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                <style>
                        {`
                            *{
                                outline: none
                            }
                            body{
                                margin: 0;
                                font-family: 'roboto', 'lato', 'segoe ui', sans-serif;
                                user-select: none;
                                cursor: default
                            }
                            a{
                                text-decoration: none;
                                color: #d4ff00;
                                font-weight: bold
                            }
                        `}
                    </style>
                    <FNR
                        url='https://randomuser.me/api?results=1&gender=male&nat=us,gb,fr,nl'
                        config={{
                            timeout: 1000
                        }}
                        loadingComponent={Loading}
                        errorComponent={ErrorComponent}
                        component={
                            ({data: {results}, config}) => {
                                return (
                                    <UserInfo
                                        name={results[0].name}
                                        picture={results[0].picture.large} />
                                )
                            }
                        } />
                </main>
                </div>)
    }
}

    render(<Demo/>, document.querySelector('#root'))
