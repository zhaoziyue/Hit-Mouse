var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameControl = (function (_super) {
    __extends(GameControl, _super);
    function GameControl() {
        var _this = _super.call(this) || this;
        _this.scoreNum = new egret.TextField(); //显示分数
        _this.addScore = 0; //初始分数
        _this.init();
        return _this;
    }
    //出老鼠的频率
    GameControl.prototype.init = function () {
        this.myHole = new Holes(); //洞
        this.addChild(this.myHole); //
        this.mouseShow(); //开局触发一次
        this.timerIn = new egret.Timer(1500, 0);
        this.timerIn.addEventListener(egret.TimerEvent.TIMER, this.mouseShow, this); //每1.5秒调用一次
        this.timerIn.start();
    };
    //洞里出老鼠
    GameControl.prototype.mouseShow = function () {
        var _this = this;
        this.holeIndex = Math.floor(Math.random() * 9);
        var hole = this.myHole.getHole(this.holeIndex);
        if (hole.numChildren == 0) {
            this.index = Math.floor(Math.random() * 5);
            this.mouse = new Mouse(this.index);
            hole.addChild(this.mouse);
            //动画
            egret.Tween.get(this.mouse)
                .to({ y: this.mouse.y - 100 }, 500, egret.Ease.cubicInOut).wait(500).to({ y: this.mouse.y }, 500, egret.Ease.cubicInOut)
                .call(Utils.removeMouse, this.mouse, [this.mouse]);
            //给老鼠添加点击事件,点击后触发死亡老鼠的方法
            this.mouse.touchEnabled = true;
            this.mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.mouse.touchEnabled = false;
                _this.mouse.deadMouse();
                _this.showAddScore();
                _this.showScore(_this.index);
            }, this);
        }
        else {
            this.mouseShow();
        }
    };
    GameControl.prototype.showScore = function (type) {
        this.addScore = 0;
        if (type == 0) {
            this.addScore = this.addScore / 2;
        }
        else if (type == 1) {
            this.addScore = this.addScore * 1.2;
        }
        else if (type == 2) {
            this.addScore = this.addScore + 100;
        }
        else if (type == 3) {
            this.addScore = this.addScore + 500;
        }
        else if (type == 4) {
            this.addScore = this.addScore - 100;
        }
        if (this.addScore <= 0) {
            this.addScore = 0;
        }
        // if (this.addScore==null){
        // 	this.addScore=0;
        // }
        this.scoreNum.text = parseInt(this.addScore + "") + "";
        score.score_show = parseInt(this.addScore + "");
        this.addChild(this.scoreNum);
        this.scoreNum.x = 425;
        this.scoreNum.y = 150;
    };
    //被打后分数动画
    GameControl.prototype.showAddScore = function () {
        var scorePic = new egret.Bitmap(RES.getRes("MousePic_json.score" + this.index));
        var hole = this.myHole.getHole(this.holeIndex);
        scorePic.x = 30;
        scorePic.y = -30;
        hole.addChild(scorePic);
        egret.Tween.get(scorePic)
            .to({ y: scorePic.y - 30 }, 400, egret.Ease.cubicInOut).wait(500)
            .call(Utils.removeMouse, scorePic, [scorePic]);
    };
    return GameControl;
}(egret.Sprite));
__reflect(GameControl.prototype, "GameControl");
//# sourceMappingURL=GameControl.js.map