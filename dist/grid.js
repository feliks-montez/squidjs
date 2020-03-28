"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squid_1 = require("./squid");
class Tile extends squid_1.Sprite {
    constructor(grid, row, col, key) {
        super(0, 0, key);
        this.rowSpan = 1;
        this.colSpan = 1;
        this.grid = grid;
        this.root = this.grid.root;
        this.ctx = this.grid.ctx;
        this.row = row;
        this.col = col;
    }
    get x() {
        return (this.width + this.grid.tileSpacing) * this.col;
    }
    get y() {
        return (this.height + this.grid.tileSpacing) * this.row;
    }
}
exports.Tile = Tile;
class GridLayout {
    constructor(x, y, numRows, numCols) {
        this.updateContinuously = true;
        this.visible = true;
        this.mouseinside = false;
        this.scale = 1;
        this.aspectRatio = [1, 1];
        this.tiles = [];
        this.tileSpacing = 0;
        this.x = x;
        this.y = y;
        this.numRows = numRows;
        this.numCols = numCols;
    }
    get width() {
        return this.numCols * (this.tiles[0].width + this.tileSpacing);
    }
    get height() {
        return this.numRows * (this.tiles[0].height + this.tileSpacing);
    }
    update(dt, parent) {
    }
    preDraw() { }
    postDraw() { }
    draw() {
        if (this.ctx) {
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.preDraw();
            this.tiles.forEach(tile => {
                tile.draw();
            });
            this.postDraw();
            this.ctx.restore();
        }
    }
    pointInBounds(x, y) {
        return (x > this.x - this.width / 2 &&
            x < this.x + this.width / 2 &&
            y > this.y - this.height / 2 &&
            y < this.y + this.height / 2);
    }
    onclick(evt) {
    }
    newTile(row, col, key) {
        const t = new Tile(this, row, col, key);
        this.tiles.push(t);
    }
}
exports.GridLayout = GridLayout;
class TileGrid extends GridLayout {
}
//# sourceMappingURL=grid.js.map