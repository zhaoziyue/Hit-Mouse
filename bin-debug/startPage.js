var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var startPage = (function (_super) {
    __extends(startPage, _super);
    function startPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/startGame.exml";
        _this.showbutton1();
        _this.showbutton2();
        _this.showbutton3();
        return _this;
    }
    //显示按钮
    //开始游戏按钮
    startPage.prototype.showbutton1 = function () {
        var button1 = new egret.Bitmap(RES.getRes("MousePic_json.icon_70"));
        button1.x = 493;
        button1.y = 220;
        this.addChild(button1);
        button1.touchEnabled = true;
        button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
    };
    startPage.prototype.onclick_begin = function () {
        var tto = new Counter();
        this.parent.addChild(tto);
        this.parent.removeChild(this);
    };
    //游戏帮助按钮
    startPage.prototype.showbutton2 = function () {
        var button2 = new egret.Bitmap(RES.getRes("MousePic_json.icon_09-64"));
        button2.x = 493;
        button2.y = 310;
        this.addChild(button2);
        button2.touchEnabled = true;
        button2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_help, this);
    };
    startPage.prototype.onclick_help = function () {
        var help = new helpPage();
        this.parent.addChild(help);
        this.parent.removeChild(this);
    };
    //退出按钮
    startPage.prototype.showbutton3 = function () {
        var button3 = new egret.Bitmap(RES.getRes("MousePic_json.icon_79"));
        button3.x = 493;
        button3.y = 415;
        this.addChild(button3);
    };
    return startPage;
}(eui.Component));
__reflect(startPage.prototype, "startPage");
//# sourceMappingURL=startPage.js.map