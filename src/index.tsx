import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import Routers from './routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));

registerServiceWorker();
