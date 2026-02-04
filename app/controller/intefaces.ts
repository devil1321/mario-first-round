export interface IRect{
    x1:number;
    y1:number;
    width:number;
    height:number;
}

export interface IClippedRect{
    width:number;
    height:number;
    translateX:number;
    translateY:number;
}

export interface IPlayer{
    lives:number;
    incrementLives:void;
    decrementLives:void;
    boundingRect:IRect
}

export interface IWorld{
    gravity:10;
}

