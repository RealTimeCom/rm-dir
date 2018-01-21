## rm-dir

**Remove directory and all its contents, sync or async**

`rm-dir` is a very fast and simple function, based only on native File System (FS) functions, no additional module is required.

```sh
$ npm install rm-dir
```
#### Example
```js
const rmdir = require('rm-dir');

rmdir('/dir/path/s-name'); // SYNC, no callback function, use try&catch for errors

rmdir('/dir/path/a-name', console.log); // ASYNC, with callback function "console.log"
```
--------------------------------------------------------
**rm-dir** is licensed under the MIT license. See the included `LICENSE` file for more details.
