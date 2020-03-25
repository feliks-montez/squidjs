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
    ctx?: CanvasRenderingContext2D;
    updateContinuously: boolean;
    visible: boolean;
    mouseinside: boolean;
    x: number;
    y: number;
    scale: number;
    update(dt: number, parent?: DisplayObject | Layer): void;
    draw(): void;
    pointInBounds(x: number, y: number): boolean;
    onclick?: (evt: MouseEvent) => void;
    onmousemove?: (evt: MouseEvent) => void;
    onmouseover?: (evt: MouseEvent) => void;
    onmouseout?: (evt: MouseEvent) => void;
}
export interface DisplayObjectContainer extends DisplayObject {
}
export declare class BoxEntity {
    ctx?: CanvasRenderingContext2D;
    updateContinuously: boolean;
    visible: boolean;
    position: vector_i;
    velocity: vector_i;
    acceleration: vector_i;
    constructor(position: vector_i, { updateContinuously, visible, velocity, acceleration }: {
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
    update(dt: number, parent: DisplayObject | Layer): void;
    draw(): void;
}
