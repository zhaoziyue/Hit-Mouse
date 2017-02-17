class score extends egret.Sprite{
		public static score_show:number;
	public constructor() {
		super();
		var scorePic:egret.Bitmap=new egret.Bitmap(RES.getRes("MousePic_json.icon_25"));
		scorePic.x=350;
		scorePic.y=150;
		this.addChild(scorePic);
	}	
}