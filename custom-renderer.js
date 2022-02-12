CustomRenderer = function (name) {
    CustomRenderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(CustomRenderer,
    Blockly.blockRendering.Renderer);

CustomConstantsProvider = function () {
    // Set up all of the constants from the base provider.
    CustomConstantsProvider.superClass_.constructor.call(this);
    // Override a few properties.
    // The width of the notch used for previous and next connections.
    this.NOTCH_WIDTH = 0;
    // The height of the notch used for previous and next connections.
    this.NOTCH_HEIGHT = 0;
    // Rounded corner radius.
    this.CORNER_RADIUS = 14;
    // The height of the puzzle tab used for input and output connections.
    this.TAB_HEIGHT = 0;
    this.TAB_WIDTH = 0;
};
Blockly.utils.object.inherits(CustomConstantsProvider,
    Blockly.blockRendering.ConstantProvider);

Blockly.blockRendering.ConstantProvider.prototype.init = function () {
    this.JAGGED_TEETH = this.makeJaggedTeeth();
    this.NOTCH = this.makeNotch();
    this.START_HAT = this.makeStartHat();
    this.PUZZLE_TAB = this.makePuzzleTab();
    this.INSIDE_CORNERS = this.makeInsideCorners();
    this.OUTSIDE_CORNERS = this.makeOutsideCorners()
};

Blockly.blockRendering.ConstantProvider.prototype.shapeFor = function (
    connection) {
    switch (connection.type) {
        case Blockly.INPUT_VALUE:
        case Blockly.OUTPUT_VALUE:
            return this.PUZZLE_TAB;
        case Blockly.PREVIOUS_STATEMENT:
        case Blockly.NEXT_STATEMENT:
            return this.NOTCH;
        default:
            throw Error('Unknown connection type');
    }
};

Blockly.blockRendering.register('custom-renderer', CustomRenderer);
CustomRenderer.prototype.makeConstants_ = function () {
    return new CustomConstantsProvider();
};