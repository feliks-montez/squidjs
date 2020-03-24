import { DisplayObject, DisplayObjectContainer } from "./entity";
import { Game } from "./squid";
export interface UIElement extends DisplayObject {
}
export declare class UIContainer implements DisplayObjectContainer {
    root?: Game;
    ctx?: CanvasRenderingContext2D;
    updateContinuously: boolean;
    visible: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    key: string;
    children: UIElement[];
    onclick?: (evt: MouseEvent) => void;
    onmousemove?: (evt: MouseEvent) => void;
    constructor(x: number, y: number, width: number, height: number, key: string);
    pointInBounds(x: number, y: number): boolean;
    update(dt: number): void;
    draw(): void;
}
