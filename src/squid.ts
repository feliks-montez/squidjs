import { DisplayObject } from "./entity";
import { UIElement, UIContainer } from "./ui-element"
import { Sprite } from "./sprite";
import { Game } from "./game"
import { ImageLoader } from "./image-loader"
import { Tile , GridLayout} from "./grid"

export { ImageLoader, Game, Sprite, UIContainer, GridLayout, Tile, UIElement }

const Squid = {
    ImageLoader: ImageLoader,
    Game: Game,
    Sprite: Sprite,
    UIContainer: UIContainer,
    GridLayout: GridLayout,
    Tile: Tile
}
export default Squid