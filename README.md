# react-fnr
react-fnr is a tool for making http requests with Axios and render the result, error and more.
## Installation
Using npm:
```shell
npm install react-fnr
```
Using yarn:
```shell
yarn add react-fnr
```
## Testing
After installing, just run:
```shell
npm start
```
Or if you are using yarn:
```shell
yarn run start
```
navigate to http://localhost:12210 to see a test.
## Importing
Requiring module:
```javascript
// es6
import FNR from 'react-fnr';
// es5
const FNR = require('react-fnr');
```
Using HTML `script` tag:
```html
<!-- Use this for production -->
<script src="https://cdn.rawgit.com/Hkh12/react-fnr/80815e49/umd/react-fnr.min.js"></script>
<!-- And this one for development -->
<script src="https://rawgit.com/Hkh12/react-fnr/master/umd/react-fnr.min.js"></script>
```
## Example Code
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
## Reference
| name | description | type | default value | required |
| -- | -- | -- | -- | -- |
| `url` | url to send request to | `string (url)` | - | ✔️ |
| `method` | request method | `get, post, head, connect, put, patch, delete, options, trace` | `get` | ❌ |
| `component` | Component should be rendered after the server response | `PropTypes.element, PropTypes.func` | - | ✔️ |
| `loadingComponent` | Component should be rendered before the server response (loading message) | `PropTypes.element, PropTypes.func` | - | ❌ |
| `errorComponent` | Component should be rendered if there was any error in request (if the status code us not 200) | `PropTypes.element, PropTypes.func` | - | ❌ |
| `config` | axios config for request (url, method and data are overridden!)  | `object` | `{}` | ❌ |


## License
[MIT](https://github.com/Hkh12/react-fnr/blob/master/LICENSE)
