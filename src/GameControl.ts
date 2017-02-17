class GameControl extends egret.Sprite {
	public timerIn: egret.Timer;//1.5秒出一个老鼠
	private myHole: Holes;//当前洞的位置
	public mouse: Mouse;//活老鼠
	public scoreNum: egret.TextField = new egret.TextField();//显示分数
	public addScore: number = 0;//初始分数
	private changeScore: egret.Bitmap;//分数类型
	private index: number;//老鼠类型
	private holeIndex:number;//洞的编号

	public constructor() {
		super();
		this.init();
	}
	//出老鼠的频率
	private init(): void {
		this.myHole = new Holes();//洞
		this.addChild(this.myHole);//
		this.mouseShow();//开局触发一次
		this.timerIn = new egret.Timer(1500, 0);
		this.timerIn.addEventListener(egret.TimerEvent.TIMER, this.mouseShow, this);//每1.5秒调用一次
		this.timerIn.start();
	}
	//洞里出老鼠
	public mouseShow(): void {
		this.holeIndex= Math.floor(Math.random() * 9);

		var hole: egret.Sprite = this.myHole.getHole(this.holeIndex);
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
			this.mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.mouse.touchEnabled = false;
				this.mouse.deadMouse();
				this.showAddScore();
				this.showScore(this.index);
			}, this);
		} else {
			this.mouseShow();
		}
	}

	private showScore(type: number): void {
		
		if (type == 0) {
			this.addScore = this.addScore / 2;
		} else if (type == 1) {
			this.addScore = this.addScore * 1.2;
		} else if (type == 2) {
			this.addScore = this.addScore + 100;
		} else if (type == 3) {
			this.addScore = this.addScore + 500;
		} else if (type == 4) {
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
	}
	//被打后分数动画
	public showAddScore(): void {
		var scorePic:egret.Bitmap =new egret.Bitmap(RES.getRes("MousePic_json.score"+this.index));
		var hole:egret.Sprite = this.myHole.getHole(this.holeIndex);

		scorePic.x=30;
		scorePic.y=-30;
		hole.addChild(scorePic);
		egret.Tween.get(scorePic)
			.to({ y: scorePic.y - 30 }, 400, egret.Ease.cubicInOut).wait(500)
			.call(Utils.removeMouse, scorePic, [scorePic]);
	}
	
}