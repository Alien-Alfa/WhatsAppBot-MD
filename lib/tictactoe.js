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

class TicTacToe {
    constructor(playerX = 'x', playerO = 'o') {
        this.playerX = playerX
        this.playerO = playerO
        this._currentTurn = false
        this._x = 0
        this._o = 0
        this.turns = 0
    }

    get board() {
        return this._x | this._o
    }

    get currentTurn() {
        return this._currentTurn ? this.playerO : this.playerX
    }

    get enemyTurn() {
        return this._currentTurn ? this.playerX : this.playerO
    }

    static check(state) {
        for (let combo of [7, 56, 73, 84, 146, 273, 292, 448])
            if ((state & combo) === combo)
                return !0
        return !1
    }

    /**
     * ```js
     * TicTacToe.toBinary(1, 2) // 0b010000000
     * ```
     */
    static toBinary(x = 0, y = 0) {
        if (x < 0 || x > 2 || y < 0 || y > 2) throw new Error('invalid position')
        return 1 << x + (3 * y)
    }

    /**
     * @param player `0` is `X`, `1` is `O`
     * 
     * - `-3` `Game Ended`
     * - `-2` `Invalid`
     * - `-1` `Invalid Position`
     * - ` 0` `Position Occupied`
     * - ` 1` `Sucess`
     * @returns {-3|-2|-1|0|1}
     */
    turn(player = 0, x = 0, y) {
        if (this.board === 511) return -3
        let pos = 0
        if (y == null) {
            if (x < 0 || x > 8) return -1
            pos = 1 << x
        } else {
            if (x < 0 || x > 2 || y < 0 || y > 2) return -1
            pos = TicTacToe.toBinary(x, y)
        }
        if (this._currentTurn ^ player) return -2
        if (this.board & pos) return 0
        this[this._currentTurn ? '_o' : '_x'] |= pos
        this._currentTurn = !this._currentTurn
        this.turns++
        return 1
    }

    /**
     * @returns {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
    static render(boardX = 0, boardO = 0) {
        let x = parseInt(boardX.toString(2), 4)
        let y = parseInt(boardO.toString(2), 4) * 2
        return [...(x + y).toString(4).padStart(9, '0')].reverse().map((value, index) => value == 1 ? 'X' : value == 2 ? 'O' : ++index)
    }
    
    /**
     * @returns {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
    render() {
        return TicTacToe.render(this._x, this._o)
    }

    get winner() {
        let x = TicTacToe.check(this._x)
        let o = TicTacToe.check(this._o)
        return x ? this.playerX : o ? this.playerO : false
    }
}

new TicTacToe().turn

module.exports = TicTacToe
