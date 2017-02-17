class Mouse extends egret.Sprite {
	private mouselive: egret.Bitmap;//活老鼠图片
	private mousedead: egret.Bitmap;//死老鼠图片
	public type: number;//老鼠类型
	public constructor(_type:number) {
		super();
		this.type=_type;
		this.creatMouse();

	}
	//生成老鼠方法
	public creatMouse(): void {
        this.mouselive = new egret.Bitmap(RES.getRes("MousePic_json.mouse" + this.type));
		this.addChild(this.mouselive);	
	}
	//老鼠死亡方法
	public deadMouse(): void {
		Utils.removeMouse(this.mouselive);
		this.mousedead = new egret.Bitmap(RES.getRes("MousePic_json.mouse" + this.type + "_1"));
		this.addChild(this.mousedead);
	}
	
	

}