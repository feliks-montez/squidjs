import { DisplayObject, DisplayObjectContainer } from "./entity";
import { Layer } from "./layer";
import { Game, Sprite } from "./squid";
export declare class Tile extends Sprite {
    grid: GridLayout;
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    constructor(grid: GridLayout, row: number, col: number, key: string);
    get x(): number;
    get y(): number;
}
export declare class GridLayout implements DisplayObjectContainer {
    root?: Game;
    ctx?: CanvasRenderingContext2D;
    updateContinuously: boolean;
    visible: boolean;
    mouseinside: boolean;
    x: number;
    y: number;
    numRows: number;
    numCols: number;
    scale: number;
    aspectRatio: number[];
    tiles: Tile[];
    tileSpacing: number;
    constructor(x: number, y: number, numRows: number, numCols: number);
    get width(): number;
    get height(): number;
    update(dt: number, parent?: DisplayObject | Layer): void;
    preDraw(): void;
    postDraw(): void;
    draw(): void;
    pointInBounds(x: number, y: number): boolean;
    onclick(evt: MouseEvent): void;
    onmousemove?(evt: MouseEvent): void;
    onmouseover?(evt: MouseEvent): void;
    onmouseout?(evt: MouseEvent): void;
    newTile(row: number, col: number, key: string): void;
}
