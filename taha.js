import {player} from './js';
window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getcontext('2d');
      canvas.width=500;
      canvas.height=500;
})
class game{
    constructor(width,height){
        this.width=width;
        this.height=height;
        this.groundMargin=80;
        this.speed=0;
        this.maxspeed=3;
        this.background=new this.Background(this);
        this.player=new Player(this);
        this.input=new InputHandler();
    }
    update(deltaTime){
        this.background.update();
        this.player.update(this.input.keys,deltaTime)
    }
    draw(context){
        this.background.draw(context);
        this.player.draw(context)
    }
    addEnemy(){
        this.enemies.push(new flyingenemies)
    }
}