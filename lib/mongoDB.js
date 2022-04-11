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
const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = class mongoDB {
  constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
    this.url = url
    this.data = this._data = this._schema = this._model = {}
    this.db
    this.options = options
  }
  async read() {
    this.db = await mongoose.connect(this.url, { ...this.options })
    this.connection = mongoose.connection
    let schema = this._schema = new Schema({
      data: {
        type: Object,
        required: true, //depends on whether the field is mandatory or not
        default: {}
      }
    })
    // this._model = mongoose.model('data', schema)
    try { this._model = mongoose.model('data', schema) } catch { this._model = mongoose.model('data') }
    this._data = await this._model.findOne({})
    if (!this._data) {
      this.data = {}
      await this.write(this.data)
      this._data = await this._model.findOne({})
    } else this.data = this._data.data
    return this.data
  }


  async write(data) {
    if (!data) return data
    if (!this._data) return (new this._model({ data })).save()
    this._model.findById(this._data._id, (err, docs) => {
      if (!err) {
        if (!docs.data) docs.data = {}
        docs.data = data
        return docs.save()
      }
    })
  }
}
