var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var score = (function (_super) {
    __extends(score, _super);
    function score() {
        var _this = _super.call(this) || this;
        var scorePic = new egret.Bitmap(RES.getRes("MousePic_json.icon_25"));
        scorePic.x = 350;
        scorePic.y = 150;
        _this.addChild(scorePic);
        return _this;
    }
    return score;
}(egret.Sprite));
__reflect(score.prototype, "score");
//# sourceMappingURL=score.js.map