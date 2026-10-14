class GameBoard {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createBoard();
    }



    createBoard() {
        const board = [];
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(null);
            }
            board.push(row);
        }
        return board;
    }

    renderBoard(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        const topLine = document.createElement("div");              //div to contain the time, the mines and the smiley face
        topLine.classList.add("game-top-line");
        container.appendChild(topLine);

        const mineCounter = document.createElement("div");          //div for the mines
        mineCounter.classList.add("counter-display");
        mineCounter.textContent = "010";
        topLine.appendChild(mineCounter);

        const smileyBtn = document.createElement("button");
        smileyBtn.classList.add("smiley-btn");
        smileyBtn.textContent = ":)";
        topLine.appendChild(smileyBtn);

        const timeCounter = document.createElement("div");          //div for the timer
        timeCounter.classList.add("counter-display");
        timeCounter.textContent = "000";
        topLine.appendChild(timeCounter);

        const table = document.createElement("table");  
        table.classList.add("game-board");
        for (let r = 0; r < this.rows; r++) {
            const row = document.createElement("tr");
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement("td");
                cell.textContent = this.board[r][c] || '';  
                cell.dataset.row = r;                            //dataset is an object that all elements have in js and i it is empty is going to create the row in it
                cell.dataset.col = c;

                row.appendChild(cell);                          // is nesting the elements
            }

            table.appendChild(row);                             // is nesting the elements

        }

        container.appendChild(table);                           // is nesting the elements

    }



    updateCell(row, col, value) {
        this.board[row][col] = value;

    }

}

export default GameBoard; 