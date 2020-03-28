import { Layer } from "./layer";
import { Game } from "./squid";
export interface vector_i {
    x: number;
    y: number;
    rot: number;
}
export declare const zeroVector: vector_i;
export interface DisplayObject {
    root?: Game;
    layer?: Layer;
    updateContinuously: boolean;
    visible: boolean;
    mouseinside: boolean;
    x: number;
    y: number;
    scale: number;
    update(dt: number): void;
    draw(): void;
    pointInBounds(x: number, y: number): boolean;
    onclick?(evt: MouseEvent): void;
    onmousemove?(evt: MouseEvent): void;
    onmouseover?(evt: MouseEvent): void;
    onmouseout?(evt: MouseEvent): void;
}
export interface DisplayObjectContainer extends DisplayObject {
}
export declare class BoxEntity implements DisplayObject {
    ctx?: CanvasRenderingContext2D;
    layer?: Layer;
    updateContinuously: boolean;
    visible: boolean;
    position: vector_i;
    velocity: vector_i;
    acceleration: vector_i;
    mouseinside: boolean;
    scale: number;
    width: number;
    height: number;
    constructor(position: vector_i, w: number, h: number, { updateContinuously, visible, velocity, acceleration }: {
        updateContinuously?: boolean | undefined;
        visible?: boolean | undefined;
        velocity?: {
            x: number;
            y: number;
            rot: number;
        } | undefined;
        acceleration?: {
            x: number;
            y: number;
            rot: number;
        } | undefined;
    }, devAttrs?: Object);
    get x(): number;
    get y(): number;
    pointInBounds(x: number, y: number): boolean;
    update(dt: number): void;
    draw(): void;
}
