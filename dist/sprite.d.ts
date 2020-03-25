import './entity';
import { vector_i, DisplayObject } from './entity';
import { Game } from './game';
export declare type sprite_states = {
    default: number[] | number[][];
    [name: string]: number[] | number[][];
};
export declare type sprite_data = {
    states: sprite_states;
};
export declare class Sprite implements DisplayObject {
    root?: Game;
    ctx?: CanvasRenderingContext2D;
    position: vector_i;
    velocity: vector_i;
    acceleration: vector_i;
    key: string;
    numrows: number;
    numcols: number;
    frame: number | number[];
    fps: number;
    dtSum: number;
    updateContinuously: boolean;
    visible: boolean;
    scale: number;
    mouseinside: boolean;
    onclick?: (evt: MouseEvent) => void;
    onmousemove?: (evt: MouseEvent) => void;
    onmouseover?: (evt: MouseEvent) => void;
    onmouseout?: (evt: MouseEvent) => void;
    spriteData: sprite_data;
    animIndex: number;
    constructor(x: number, y: number, key: string, numcols?: number, numrows?: number, fps?: number);
    get x(): number;
    set x(n: number);
    get y(): number;
    set y(n: number);
    get rotation(): number;
    set rotation(rad: number);
    get angle(): number;
    set angle(ang: number);
    get swidth(): number;
    get sheight(): number;
    get width(): number;
    get height(): number;
    get image(): HTMLImageElement;
    getSRow(frame: number): number;
    getSCol(frame: number): number;
    get curState(): keyof sprite_states;
    pointInBounds(x: number, y: number): boolean;
    setNextFrame(): void;
    calculateFrame(dt: number): void;
    update(dt: number): void;
    preDraw(): void;
    postDraw(): void;
    draw(): void;
}
export declare class AnimationSprite extends Sprite {
    numrows: number;
    numcols: number;
    frame: number;
    constructor(x: number, y: number, key: string, numrows: number, numcols: number, frame?: number);
}
