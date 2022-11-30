"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");

const { width: fullWidth, height: fullHeight } = react_native_1.Dimensions.get("window");

exports.default = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: fullHeight / 3
    },
    focusContainer: {
    },
    cropBox: {
        position: "absolute",
    },
    topEdgeHandle: {},
    bottomEdgeHandle: {},
    rightEdgeHandle: {},
    leftEdgeHandle: {},
    topEdgeActivityIndicator: {},
    bottomEdgeActivityIndicator: {},
    leftEdgeActivityIndicator: {},
    rightEdgeActivityIndicator: {},
    topLeftCornerHandle: {},
    topRightCornerHandle: {},
    bottomLeftCornerHandle: {},
    bottomRightCornerHandle: {},
    topLeftCornerOuterHandle: {},
    topRightCornerOuterHandle: {},
    bottomLeftCornerOuterHandle: {},
    bottomRightCornerOuterHandle: {},
    topEdgeOuterHandle: {},
    bottomEdgeOuterHandle: {},
    leftEdgeOuterHandle: {},
    rightEdgeOuterHandle: {},
});
