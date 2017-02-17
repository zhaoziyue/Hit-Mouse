var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse(_type) {
        var _this = _super.call(this) || this;
        _this.type = _type;
        _this.creatMouse();
        return _this;
    }
    //生成老鼠方法
    Mouse.prototype.creatMouse = function () {
        this.mouselive = new egret.Bitmap(RES.getRes("MousePic_json.mouse" + this.type));
        this.addChild(this.mouselive);
    };
    //老鼠死亡方法
    Mouse.prototype.deadMouse = function () {
        Utils.removeMouse(this.mouselive);
        this.mousedead = new egret.Bitmap(RES.getRes("MousePic_json.mouse" + this.type + "_1"));
        this.addChild(this.mousedead);
    };
    return Mouse;
}(egret.Sprite));
__reflect(Mouse.prototype, "Mouse");
//# sourceMappingURL=Mouse.js.map