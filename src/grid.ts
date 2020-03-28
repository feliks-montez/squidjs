import { DisplayObject, DisplayObjectContainer } from "./entity";
import { Layer } from "./layer";
import { Game, Sprite } from "./squid";

export class Tile extends Sprite {
    grid: GridLayout
    row: number
    col: number
    rowSpan: number = 1
    colSpan: number = 1
    constructor(grid: GridLayout, row: number, col: number, key: string) {
        super(0, 0, key)
        this.grid = grid
        this.root = this.grid.root
        this.row = row
        this.col = col
    }

    get x(): number {
        return (this.width + this.grid.tileSpacing) * this.col
    }

    get y(): number {
        return (this.height + this.grid.tileSpacing) * this.row
    }

    get layer() {
        return this.grid.layer
    }
}

export class GridLayout implements DisplayObjectContainer {
    root?: Game
    layer?: Layer
    updateContinuously: boolean = true
    visible: boolean = true
    mouseinside: boolean = false
    x: number
    y: number
    numRows: number
    numCols: number
    scale: number = 1
    aspectRatio: number[] = [1,1]
    tiles: Tile[] = []

    tileSpacing: number = 0

    constructor(x: number, y: number, numRows: number, numCols: number) {
        this.x = x
        this.y = y
        this.numRows = numRows
        this.numCols = numCols
    }

    get width() {
        return this.numCols * (this.tiles[0].width + this.tileSpacing)
    }

    get height() {
        return this.numRows * (this.tiles[0].height + this.tileSpacing)
    }


    get ctx() {
        return this.layer!.ctx
    }

    update(dt: number, parent?: DisplayObject | Layer) {

    }

    preDraw() {}
    postDraw() {}

    draw() {
        if (this.ctx) {
            this.ctx.save()
            this.ctx.translate(this.x, this.y)
            this.preDraw()
            this.tiles.forEach(tile => {
                tile.draw()
            })
            this.postDraw()
            this.ctx.restore()
        }
    }

    pointInBounds(x: number, y: number): boolean {
        return (
            x > this.x-this.width/2 &&
            x < this.x+this.width/2 &&
            y > this.y-this.height/2 &&
            y < this.y+this.height/2)
    }

    onclick(evt: MouseEvent) {

    }
    onmousemove?(evt: MouseEvent): void
    onmouseover?(evt: MouseEvent): void
    onmouseout?(evt: MouseEvent): void

    newTile(row: number, col: number, key: string) {
        const t = new Tile(this, row, col, key)
        this.tiles.push(t)
    }
}

class TileGrid extends GridLayout {

}