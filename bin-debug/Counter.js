var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super.call(this) || this;
        _this.fullTime = 4;
        // private timeContainer:egret.Sprite = new egret.Sprite();
        _this.time1 = new egret.Bitmap(RES.getRes("MousePic_json.icon_42"));
        _this.time2 = new egret.Bitmap(RES.getRes("MousePic_json.icon_40"));
        _this.time3 = new egret.Bitmap(RES.getRes("MousePic_json.icon_37"));
        _this.time4 = new egret.Bitmap(RES.getRes("MousePic_json.icon_35"));
        _this.skinName = "resource/eui_skins/BackGround.exml";
        _this.timer1 = new egret.Timer(1000, 0);
        _this.timer1.addEventListener(egret.TimerEvent.TIMER, _this.countTime, _this);
        _this.timer1.start();
        return _this;
    }
    Counter.prototype.countTime = function () {
        this.fullTime--;
        if (this.fullTime == 3) {
            this.addChild(this.time1);
            Sound.sound.time_S();
            this.time1.x = 350;
            this.time1.y = 300;
        }
        else if (this.fullTime == 2) {
            this.addChild(this.time2);
            Sound.sound.time_S();
            this.time2.x = 350;
            this.time2.y = 300;
            this.removeChild(this.time1);
        }
        else if (this.fullTime == 1) {
            this.addChild(this.time3);
            Sound.sound.time_S();
            this.time3.x = 350;
            this.time3.y = 300;
            this.removeChild(this.time2);
        }
        else if (this.fullTime == 0) {
            this.addChild(this.time4);
            Sound.sound.game_begin();
            this.time4.x = 250;
            this.time4.y = 300;
            this.removeChild(this.time3);
        }
        else {
            this.timer1.stop();
            this.startGame();
        }
    };
    Counter.prototype.startGame = function () {
        var bg = new MainView();
        this.parent.addChild(bg);
        Sound.sound.bgm_S();
        this.parent.removeChild(this);
    };
    return Counter;
}(eui.Component));
__reflect(Counter.prototype, "Counter");
//# sourceMappingURL=Counter.js.map