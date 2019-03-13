/*jslint node: true */
'use strict';

/**
 * Calls a callback with the current {@data} object.
 *
 * Note: Don't use this command to modify the {@data} object. Please use
 *  {@link Command.then} instead.
 *
 * @function data
 * @param {function} callback - A callback with an argument for {@context, @data}
 * @memberof Command
 * @instance
 */

function Rawcallback(context, data, next, done) {
    this.args[0](context, data);
    next(context, data);
    done();
}

module.exports.rawcallback = Rawcallback;
