## rm-dir

**Remove directory and all its contents, sync, async callback or promise**

`rm-dir` is a very fast and simple function, based only on native File System (FS) functions, no additional module is required.

```sh
$ npm install rm-dir
```
#### Example
```js
const rmdir = require('rm-dir');

rmdir('/path/dir'); // SYNC, no callback function, use try&catch for errors

rmdir('/path/dir', console.log); // ASYNC, with callback function "console.log"

// Promise
rmdir.promise('/path/dir').then(console.log).catch(console.error);

// async / await
(async () => {
    try {
        console.log(await rmdir.promise('/path/dir'));
    } catch(e) {
        console.error(e);
    }
})();
```
--------------------------------------------------------
**rm-dir** is licensed under the MIT license. See the included `LICENSE` file for more details.
