class MainView extends eui.Component{
	public constructor() {
		super();
		this.skinName="resource/eui_skins/BackGround.exml"
		
		var mouse:GameControl = new GameControl();
		this.addChild(mouse);	
		var Hm:Hammer=new Hammer();
		this.addChild(Hm);
		var showNum:score = new score();
		this.addChild(showNum);
		var displayTime:Time=new Time();
		this.addChild(displayTime);
			
	}
		
}