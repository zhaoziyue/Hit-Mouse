class Counter extends eui.Component{
	private timer1:egret.Timer
	private fullTime:number = 4;
	// private timeContainer:egret.Sprite = new egret.Sprite();

	private time1: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_42"));
	private time2: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_40"));
	private time3: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_37"));
	private time4: egret.Bitmap = new egret.Bitmap(RES.getRes("MousePic_json.icon_35"));

	public constructor() {
		super();		
		this.skinName="resource/eui_skins/BackGround.exml"
		this.timer1 = new egret.Timer(1000, 0);
		this.timer1.addEventListener(egret.TimerEvent.TIMER, this.countTime, this);
        this.timer1.start();
		
	}
	private countTime(){
		this.fullTime--;
		if(this.fullTime == 3){
			this.addChild(this.time1);
			Sound.sound.time_S();
			this.time1.x=350;
			this.time1.y=300;
		}else if(this.fullTime == 2){
			this.addChild(this.time2);
			Sound.sound.time_S();			
			this.time2.x=350;
			this.time2.y=300;
			this.removeChild(this.time1);
		}else if(this.fullTime == 1){
			this.addChild(this.time3);
			Sound.sound.time_S();			
			this.time3.x=350;
			this.time3.y=300;
			this.removeChild(this.time2);
			
		}else if(this.fullTime == 0){
			this.addChild(this.time4);
			Sound.sound.game_begin();			
			this.time4.x=250;
			this.time4.y=300;
			this.removeChild(this.time3);
		}else{
			this.timer1.stop();
			this.startGame();
		}
	}
	private startGame(){
		var bg:MainView= new MainView();
		this.parent.addChild(bg);
		Sound.sound.bgm_S();
		this.parent.removeChild(this);
	}
}