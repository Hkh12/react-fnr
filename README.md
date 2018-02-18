# react-fnr ✨
react-fnr is a tool for making http requests with Axios and render the result, error and more.
### Installation
> **Module is not published yet, I'll do it after 1.0.0 release.**

```shell
npm install react-fnr
```
### Usage
Import the module:
```javascript
// CommonJS
const FNR = require('react-fnr');
// es6
import FNR from 'react-fnr';
```
work with it:
```javascript
import React from 'react';
import FNR from 'react-fnr';

const Example = (props) => {
    return (
        <FNR url={props.url} method='get' component={
            (data) => {
                return <p>{data}</p>
            }
        } loadingComponent={
            () => {
                return <div>Loading...</div>;
            }
        } errorComponent={
            () => {
                return <div>An error occurred. please try again later.</div>;
            }
        } />
    );
}
```
