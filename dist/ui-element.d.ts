import { DisplayObject, DisplayObjectContainer } from "./entity";
import { Layer } from "./layer";
export interface UIElement extends DisplayObject {
}
export declare class UIContainer implements DisplayObjectContainer {
    layer?: Layer;
    updateContinuously: boolean;
    visible: boolean;
    x: number;
    y: number;
    scale: number;
    width: number;
    height: number;
    key: string;
    mouseinside: boolean;
    onclick?: (evt: MouseEvent) => void;
    onmousemove?: (evt: MouseEvent) => void;
    onmouseover?: (evt: MouseEvent) => void;
    onmouseout?: (evt: MouseEvent) => void;
    constructor(x: number, y: number, width: number, height: number, key: string);
    get ctx(): CanvasRenderingContext2D | undefined;
    pointInBounds(x: number, y: number): boolean;
    update(dt: number): void;
    preDraw(): void;
    postDraw(): void;
    draw(): void;
}
