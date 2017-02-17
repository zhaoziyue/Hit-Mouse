var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Time = (function (_super) {
    __extends(Time, _super);
    function Time() {
        var _this = _super.call(this) || this;
        _this.timer = new egret.Timer(1000);
        _this.timeShow = new egret.TextField();
        _this.timeS = 30;
        _this.showTime();
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.showTime, _this);
        _this.timer.start();
        //漏斗图片
        var timePic = new egret.Bitmap(RES.getRes("MousePic_json.time"));
        timePic.x = 230;
        timePic.y = 144;
        _this.addChild(timePic);
        return _this;
    }
    Time.prototype.showTime = function () {
        this.timeS--;
        this.timeShow.text = this.timeS + "";
        this.addChild(this.timeShow);
        this.timeShow.x = 280;
        this.timeShow.y = 150;
        this.timeShow.textColor = 0xFA8D3B;
        if (this.timeS <= 0) {
            this.timer.stop();
            var exit = new GameOver();
            this.parent.parent.addChild(exit);
            this.parent.parent.removeChild(this.parent);
        }
    };
    return Time;
}(egret.Sprite));
__reflect(Time.prototype, "Time");
//# sourceMappingURL=Time.js.map