var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var helpPage = (function (_super) {
    __extends(helpPage, _super);
    function helpPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/helpGame.exml";
        _this.backmenu();
        return _this;
    }
    helpPage.prototype.backmenu = function () {
        var backbutton = new egret.Bitmap(RES.getRes("MousePic_json.icon_86"));
        backbutton.x = 270;
        backbutton.y = 380;
        this.addChild(backbutton);
        backbutton.touchEnabled = true;
        backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_backmenu, this);
    };
    helpPage.prototype.onclick_backmenu = function () {
        var ma = new startPage();
        this.parent.addChild(ma);
        this.parent.removeChild(this);
    };
    return helpPage;
}(eui.Component));
__reflect(helpPage.prototype, "helpPage");
//# sourceMappingURL=helpPage.js.map