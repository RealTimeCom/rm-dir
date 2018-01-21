/* SOURCE FILE - Copyright (c) 2017 rm-dir - Tanase Laurentiu Iulian - https://github.com/RealTimeCom/rm-dir */
'use strict';

const fs = require('fs'), s = require('path').sep;

function each(d, a, cb) {
    if (typeof cb === 'function') { // async
        if (a.length > 0) {
            fs.unlink(d + s + a[0], e => {
                if (e) {
                    if (e.code === 'EISDIR') {
                        rmdir(d + s + a[0], e => {
                            if (e) { cb(e); } else { each(d, a.splice(0, 1) ? a : a, cb); }
                        });
                    } else { cb(e); }
                } else { each(d, a.splice(0, 1) ? a : a, cb); }
            });
        } else { fs.rmdir(d, cb); }
    } else { // sync
        if (a.length > 0) {
            try {
                fs.unlinkSync(d + s + a[0]);
                each(d, a.splice(0, 1) ? a : a);
            } catch (e) {
                if (e.code === 'EISDIR') {
                    rmdir(d + s + a[0]);
                    each(d, a.splice(0, 1) ? a : a);
                } else { throw e; }
            }
        } else { fs.rmdirSync(d); }
    }
}

function rmdir(d, cb) {
    if (typeof cb === 'function') { // async
        fs.rmdir(d, e => {
            if (e) {
                if (e.code === 'ENOTEMPTY') {
                    fs.readdir(d, (e, a) => {
                        if (e) { cb(e); } else { each(d, a, cb); }
                    });
                } else { cb(e); }
            } else { cb(); }
        });
    } else { // sync
        try {
            fs.rmdirSync(d);
        } catch (e) {
            if (e.code === 'ENOTEMPTY') {
                each(d, fs.readdirSync(d));
            } else { throw e; }
        }
    }
}
module.exports = rmdir;
