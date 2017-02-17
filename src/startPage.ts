class startPage extends eui.Component {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/startGame.exml";
		this.showbutton1();
		this.showbutton2();
		this.showbutton3();
	}
	//显示按钮
	//开始游戏按钮
	private showbutton1(): void {
		var button1: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_70"));
		button1.x = 493;
		button1.y = 220;
		this.addChild(button1);
		button1.touchEnabled = true;
		button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
	}
	private onclick_begin() {
		var tto: Counter = new Counter();
		this.parent.addChild(tto);
		this.parent.removeChild(this);
	}
	//游戏帮助按钮
	private showbutton2(): void {
		var button2: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_09-64"));
		button2.x = 493;
		button2.y = 310;
		this.addChild(button2);
		button2.touchEnabled = true;
		button2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_help, this);
	}
	private onclick_help() {
		var help: helpPage = new helpPage();
		this.parent.addChild(help);
		this.parent.removeChild(this);
	}
	//退出按钮
	private showbutton3(): void {
		var button3: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_79"));
		button3.x = 493;
		button3.y = 415;
		this.addChild(button3);
	}

}
