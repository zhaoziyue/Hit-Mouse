class Holes extends egret.Sprite {
	public holes: Array<egret.Sprite>;
	public constructor() {
		super();
		this.makeHoles();
	}

	private place: number[][] = [
		[138, 265],
		[325, 262],
		[523, 268],
		[110, 355],
		[327, 355],
		[527, 355],
		[103, 453],
		[327, 455],
		[547, 460]
	];

	private makeHoles(): void {
		this.holes = new Array();
		for (var a: number = 0; a < this.place.length; a++) {
			var container = new egret.Sprite();
			container.x = this.place[a][0];
			container.y = this.place[a][1];
			this.addChild(container);
			this.holes.push(container);
			//遮罩
			var mask0: egret.Shape = new egret.Shape();
			mask0.graphics.beginFill(0xffffff, 1);
			mask0.graphics.drawCircle(container.x + 60, container.y - 70, 80);//hole
			mask0.graphics.endFill();
			this.addChild(mask0);
			container.mask = mask0;
		}

	}
	public getHole(_index: number): egret.Sprite {
		return this.holes[_index];
	}


}