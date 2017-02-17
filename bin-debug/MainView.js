var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/BackGround.exml";
        var mouse = new GameControl();
        _this.addChild(mouse);
        var Hm = new Hammer();
        _this.addChild(Hm);
        var showNum = new score();
        _this.addChild(showNum);
        var displayTime = new Time();
        _this.addChild(displayTime);
        return _this;
    }
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView");
//# sourceMappingURL=MainView.js.map