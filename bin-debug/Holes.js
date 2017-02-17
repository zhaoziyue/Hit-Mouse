var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Holes = (function (_super) {
    __extends(Holes, _super);
    function Holes() {
        var _this = _super.call(this) || this;
        _this.place = [
            [138, 265],
            [325, 262],
            [523, 268],
            [110, 355],
            [327, 355],
            [527, 355],
            [103, 453],
            [327, 455],
            [547, 460]
        ];
        _this.makeHoles();
        return _this;
    }
    Holes.prototype.makeHoles = function () {
        this.holes = new Array();
        for (var a = 0; a < this.place.length; a++) {
            var container = new egret.Sprite();
            container.x = this.place[a][0];
            container.y = this.place[a][1];
            this.addChild(container);
            this.holes.push(container);
            //遮罩
            var mask0 = new egret.Shape();
            mask0.graphics.beginFill(0xffffff, 1);
            mask0.graphics.drawCircle(container.x + 60, container.y - 70, 80); //hole
            mask0.graphics.endFill();
            this.addChild(mask0);
            container.mask = mask0;
        }
    };
    Holes.prototype.getHole = function (_index) {
        return this.holes[_index];
    };
    return Holes;
}(egret.Sprite));
__reflect(Holes.prototype, "Holes");
//# sourceMappingURL=Holes.js.map