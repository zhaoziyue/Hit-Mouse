var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hammer = (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.creatHammer, _this);
        return _this;
    }
    //点击事件
    Hammer.prototype.creatHammer = function () {
        this.smallHammer = Utils.createBitmapByName("hammer_png");
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showHammer, this);
    };
    //锤子显示
    Hammer.prototype.showHammer = function (e) {
        var _this = this;
        this.addChild(this.smallHammer);
        Sound.sound.hammer_S();
        this.smallHammer.x = e.stageX + this.smallHammer.width * 0.6;
        this.smallHammer.y = e.stageY - this.smallHammer.height * 0.2;
        this.smallHammer.anchorOffsetX = this.smallHammer.width * 0.8;
        this.smallHammer.anchorOffsetY = this.smallHammer.height * 0.8;
        //锤子缓动
        egret.Tween.get(this.smallHammer).to({ rotation: -40 }, 200, egret.Ease.backInOut).call(function () {
            _this.smallHammer.rotation = 40;
            if (_this.smallHammer.parent) {
                _this.smallHammer.parent.removeChild(_this.smallHammer);
            }
        }, this);
    };
    return Hammer;
}(egret.Sprite));
__reflect(Hammer.prototype, "Hammer");
//# sourceMappingURL=Hammer.js.map