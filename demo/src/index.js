import React, {Component} from 'react';
import {render} from 'react-dom';

import FNR from '../../src';

class Demo extends Component {
  render() {
    return <div>
      <FNR url='https://api.piorra.ir/wikipedia?key=Test&value=React_(JavaScript_library)' component={
              (data, url) => {
                  return (<div>
                      <h1>Fetched from: <span style={{color: '#673ab7'}}>{url}</span></h1>
                      <hr />
                      <h1>{data.result.title}</h1>
                      <p>
                          {data.result.extract}
                      </p>
                      <br/>
                  </div>)
              }
          } />
    </div>
  }
}

render(<Demo/>, document.querySelector('#root'))
