/**
   * MIT License
* 
   * Copyright (c) 2021 Alien-Alfa.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/
const path = require('path')
const _fs = require('fs')
const { promises: fs } = _fs

class Database {
    /**
     * Create new Database
     * @param {String} filepath Path to specified json database
     * @param  {...any} args JSON.stringify arguments
     */
    constructor(filepath, ...args) {
        this.file = path.resolve(filepath)
        this.logger = console
        
        this._load()

        this._jsonargs = args
        this._state = false
        this._queue = []
        this._interval = setInterval(async () => {
          if (!this._state && this._queue && this._queue[0]) {
            this._state = true
            await this[this._queue.shift()]().catch(this.logger.error)
            this._state = false
          }
        }, 1000)
        
    }

    get data() {
        return this._data
    }

    set data(value) {
        this._data = value
        this.save()
    }

    /**
     * Queue Load
     */
    load() {
        this._queue.push('_load')
    }

    /**
     * Queue Save
     */
    save() {
        this._queue.push('_save')
    }

    _load() {
        try {
          return this._data = _fs.existsSync(this.file) ? JSON.parse(_fs.readFileSync(this.file)) : {}
        } catch (e) {
          this.logger.error(e)
          return this._data = {}
        }
    }

    async _save() {
        let dirname = path.dirname(this.file)
        if (!_fs.existsSync(dirname)) await fs.mkdir(dirname, { recursive: true })
        await fs.writeFile(this.file, JSON.stringify(this._data, ...this._jsonargs))
        return this.file
    }
}

module.exports = Database

