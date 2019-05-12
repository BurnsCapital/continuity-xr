// run a timer to sync the chain with the db
//should be a class for mutiple instances(many nodes)
// event driven would be cooler(cody)
class ChainSync {
    constructor( _nodeAddress, _interval){
        this.nodeAddress = _nodeAddress; 
        this.interval = _interval;
    }

    syncChain(){
        setInterval(function(){
           //do the things to check if there is new data on the chain
            //console.log('test');
        }, this.interval);
    }
}
module.exports =  ChainSync;