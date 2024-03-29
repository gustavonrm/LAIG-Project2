/**
 * Animation
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Animation{
    /**
     * @constructor 
     */
    constructor(scene){
        //times 
        this.scene = scene; 

        //times 
        this.delta_t=0;
        this.last_t=0;
        this.second=0; 
        
    }
      /**
     * @method update
     * atualizar o seu estado em função do tempo
     * @param {int} t 
     */
    update(t){
       this.delta_t = t-this.last_t; 
       this.last_t = t;
       if( t%100 == 0 ){ //todo see what is happing on senconds ( should be mod 10 ) 1000= 1second, refrsh 100, 10TICKS = 2 s
        this.second++; 
       } 
    }
    /**
     * @method apply
     * aplicar a transformação sobre a matriz de transformações da cena quando adequado 
     */
    apply(){
        this.scene.multMatrix(this.m);
    }

}