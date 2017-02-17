class Time extends egret.Sprite {
	private timer: egret.Timer = new egret.Timer(1000);
	private timeShow: egret.TextField = new egret.TextField();
	private timeS: number = 30;
	public constructor() {
		super();
		this.showTime();
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.showTime, this);
        this.timer.start();
		//漏斗图片
		var timePic: egret.Bitmap =new egret.Bitmap(RES.getRes("MousePic_json.time"));
		timePic.x = 230;
		timePic.y = 144;
		this.addChild(timePic);
	}

	private showTime(): void {
		this.timeS--;
		this.timeShow.text = this.timeS + "";
		this.addChild(this.timeShow);
		this.timeShow.x = 280;
		this.timeShow.y = 150;
		this.timeShow.textColor = 0xFA8D3B;
		if (this.timeS <= 0) {
			this.timer.stop();
			var exit: GameOver = new GameOver();
			this.parent.parent.addChild(exit);
			this.parent.parent.removeChild(this.parent);
		}
	}
}