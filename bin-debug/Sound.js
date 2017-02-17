var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        return _super.call(this) || this;
    }
    //锤子挥动声音
    Sound.prototype.hammer_S = function () {
        this.hammer_s = new egret.Sound();
        this.hammer_s.load("resource/assets/no_hit.mp3");
        this.hammer_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //游戏结束声音
    Sound.prototype.over_S = function () {
        this.gameover_s = new egret.Sound();
        this.gameover_s.load("resource/assets/over_music.mp3");
        this.gameover_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //倒计时声音
    Sound.prototype.time_S = function () {
        this.time_s = new egret.Sound();
        this.time_s.load("resource/assets/second_music.mp3");
        this.time_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //游戏开始声音
    Sound.prototype.game_begin = function () {
        this.begin_s = new egret.Sound();
        this.begin_s.load("resource/assets/begin_music.mp3");
        this.begin_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
    };
    //播放声音
    Sound.prototype.onLoadComplete = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        var channel = sound.play(0, 1);
    };
    //游戏开始声音
    Sound.prototype.bgm_S = function () {
        this.bgm_s = new egret.Sound();
        this.bgm_s.load("resource/assets/game_music.mp3");
        this.bgm_s.addEventListener(egret.Event.COMPLETE, this.onLoadComplete1, this);
    };
    Sound.prototype.onLoadComplete1 = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        var channel = sound.play(0, 0);
    };
    return Sound;
}(egret.DisplayObjectContainer));
Sound.sound = new Sound();
__reflect(Sound.prototype, "Sound");
//# sourceMappingURL=Sound.js.map