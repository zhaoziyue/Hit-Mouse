class GameOver extends eui.Component {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/Game_Over.exml";
		this.backmenu();
		this.display_score();
	}
	private backmenu(): void {
		var backbutton: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_86"));
		backbutton.x = 270;
		backbutton.y = 380;
		this.addChild(backbutton);
		backbutton.touchEnabled = true;
		backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_backmenu, this);
	}
	private onclick_backmenu() {
		location.reload();
	}
	private display_score(): void {
		var interScore: egret.TextField = new egret.TextField();
		interScore.text = "您的总分为：" + score.score_show;
        interScore.x = 250;
		interScore.y = 320;
		interScore.size = 30;
		interScore.textColor = 0xFF0000;
		this.addChild(interScore);
	}

}