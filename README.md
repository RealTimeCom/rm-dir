## rm-dir

**Remove directory and all its contents, sync or async**

`rm-dir` is a very fast and simple module, based only on native File System (FS), no additional module is required.

```sh
$ npm install rm-dir
```
#### Example
```js
const rmdir = require('rm-dir');

rmdir('/dir/path/s-name'); // SYNC, no callback function

rmdir('/dir/path/a-name', console.log); // ASYNC, with callback function
```
--------------------------------------------------------
**rm-dir** is licensed under the MIT license. See the included `LICENSE` file for more details.
