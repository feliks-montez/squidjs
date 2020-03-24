"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_element_1 = require("./ui-element");
exports.UIContainer = ui_element_1.UIContainer;
const sprite_1 = require("./sprite");
exports.Sprite = sprite_1.Sprite;
const game_1 = require("./game");
exports.Game = game_1.Game;
const image_loader_1 = require("./image-loader");
exports.ImageLoader = image_loader_1.ImageLoader;
const Squid = {
    ImageLoader: image_loader_1.ImageLoader,
    Game: game_1.Game,
    Sprite: sprite_1.Sprite,
    UIContainer: ui_element_1.UIContainer
};
exports.default = Squid;
//# sourceMappingURL=squid.js.map