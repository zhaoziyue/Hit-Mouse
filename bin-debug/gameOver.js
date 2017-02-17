var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/Game_Over.exml";
        _this.backmenu();
        _this.display_score();
        return _this;
    }
    GameOver.prototype.backmenu = function () {
        var backbutton = new egret.Bitmap(RES.getRes("MousePic_json.icon_86"));
        backbutton.x = 270;
        backbutton.y = 380;
        this.addChild(backbutton);
        backbutton.touchEnabled = true;
        backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_backmenu, this);
    };
    GameOver.prototype.onclick_backmenu = function () {
        location.reload();
    };
    GameOver.prototype.display_score = function () {
        var interScore = new egret.TextField();
        interScore.text = "您的总分为：" + score.score_show;
        interScore.x = 250;
        interScore.y = 320;
        interScore.size = 30;
        interScore.textColor = 0xFF0000;
        this.addChild(interScore);
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver");
//# sourceMappingURL=gameOver.js.map