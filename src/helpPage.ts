class helpPage extends eui.Component {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/helpGame.exml";
		this.backmenu();
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
		var ma: startPage = new startPage();
		this.parent.addChild(ma);
		this.parent.removeChild(this);
	}

}