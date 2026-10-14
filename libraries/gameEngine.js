import GameBoard from '../modules/gameBoard.js';
class GameEngine {
    constructor(containerId) {
        this.gameBoard = new GameBoard(9, 9);
        this.gameBoard.renderBoard(containerId);
    }
}

export default GameEngine;