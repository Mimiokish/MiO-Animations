export default class Canvas {
    #nodeParent: null | HTMLElement | Element;
    #nodeCanvas: null | HTMLCanvasElement;

    constructor(nodeId: string) {
        switch (true) {
            case nodeId.includes("#"):
                this.#nodeParent = document.getElementById(nodeId.substring(1));
                break
            case nodeId.includes("."):
                this.#nodeParent = document.getElementsByClassName(nodeId.substring(1))[0];
                break
            default:
                this.#nodeParent = null;
        }

        if (!this.#nodeParent) {
            console.error("MiO Animations | Canvas - failed to get the parent node: ", nodeId);
        }

        this.#nodeCanvas = document.createElement("canvas");
        this.#initialize();
    }

    #initialize(): void {
        if (this.#nodeParent && this.#nodeCanvas) {
            this.#nodeParent.appendChild(this.#nodeCanvas);

            if (this.#nodeParent) {
                if ("style" in this.#nodeParent) {
                    this.#nodeParent.style.position = "relative";
                    this.#nodeParent.style.overflow = "hidden";
                }
            }

            this.#nodeCanvas.width = this.#nodeParent.clientWidth;
            this.#nodeCanvas.height = this.#nodeParent.clientHeight;
        }
    }

    public getContext(type: string): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext | null | boolean {
        if (!this.#nodeCanvas) {
            return false;
        } else {
            switch (type.toUpperCase()) {
                case "2D":
                    return this.#nodeCanvas.getContext("2d");
                case "WEBGL":
                    return this.#nodeCanvas.getContext("webgl");
                case "WEBGL2":
                    return this.#nodeCanvas.getContext("webgl2");
                default:
                    return false;
            }
        }
    }
}