"use strict";

interface Shape {
    numerator: number;
    denominator: number;
    dropZone: number;
    view?: {
        indexShape: number;
        height: number;
        moveToFront: () => void;
    }
}

export function dropShapeToZone(shape: Shape, zoneIndex: number) {
    var model = {
        gameModel: {
            MINIMUM_PAIRS: 1,
            MAXIMUM_PAIRS: 10
        },
        dropZone: [1, 2]
    };
    //target dropZone now equals the indexShape
    if (shape.view) {
        model.dropZone[zoneIndex] = shape.view.indexShape;
    }
    shape.dropZone = zoneIndex;
    var targetPosition = {
        x: 100,
        y: 100
    };
    if (zoneIndex > model.gameModel.MAXIMUM_PAIRS * 2 - 1) {
        if (shape.view) {
            targetPosition.y -= shape.view.height / 2 - 13; //adjust position on scales
        }
        //Adjust numeric mixed fractions down a bit because they are too high by default.
        if (shape.view && shape.numerator / shape.denominator > 1) {
            targetPosition.y += 11;
        }
        else if (shape.view) {
            targetPosition.y += 7;
        }
    }
    if (shape.view) {
        shape.view.moveToFront();
    }
}
