import { DisplayObject } from "./entity";
import { Game } from "./game";
export declare class Layer {
    name: string;
    canvas: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    root?: Game;
    updateContinuously: boolean;
    visible: boolean;
    children: DisplayObject[];
    redraw: boolean;
    _viewMatrix: Float32Array;
    constructor(name: string, canvas: HTMLCanvasElement, updateContinuously?: boolean, visible?: boolean);
    get width(): number;
    get height(): number;
    setViewMatrix(m: Float32Array): void;
    setTranslation(x: number, y: number): void;
    setScaling(x: number, y: number): void;
    update(dt: number): void;
    draw(): void;
    onclick(evt: MouseEvent): void;
    onmousemove(evt: MouseEvent): void;
    add(obj: DisplayObject): void;
}
