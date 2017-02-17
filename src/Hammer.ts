class Hammer extends egret.Sprite {
	private smallHammer: egret.Bitmap;//锤子图片
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.creatHammer, this);
	}
	//点击事件
	private creatHammer(): void {
		
		this.smallHammer = Utils.createBitmapByName("hammer_png");
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showHammer, this);
	}
	//锤子显示
	private showHammer(e: egret.TouchEvent):void
	{
		    this.addChild(this.smallHammer);
			Sound.sound.hammer_S();
			this.smallHammer.x = e.stageX + this.smallHammer.width * 0.6;
			this.smallHammer.y = e.stageY - this.smallHammer.height * 0.2;
			this.smallHammer.anchorOffsetX = this.smallHammer.width * 0.8;
			this.smallHammer.anchorOffsetY = this.smallHammer.height * 0.8;
			//锤子缓动
			egret.Tween.get(this.smallHammer).to({ rotation: -40 }, 200, egret.Ease.backInOut).call(() => {
				this.smallHammer.rotation = 40;
				if (this.smallHammer.parent) {
					this.smallHammer.parent.removeChild(this.smallHammer);
				}
			}, this);
	}
}