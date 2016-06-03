var chatLayer = cc.Layer.extend({

    ctor : function(){

        this._super();

        var size = cc.winSize;

        var chatLayer = ccs.load(res.chatLayer).node;

        chatLayer.setAnchorPoint(cc.p(0.5,0.5));
        chatLayer.ignoreAnchorPointForPosition(false);
        chatLayer.setPosition(cc.p(size.width/2,size.height/2));

        this.addChild(chatLayer);

        //text1 = ccui.helper.seekWidgetByName(fontScene.node,"test1");

    },

    onEnter : function(){

        this._super();
    },

    onExit : function(){

        this._super();
    }

});

var chatScene = cc.Scene.extend({

    onEnter : function(){

        this._super();
        var layer = new chatLayer();
        this.addChild(layer);
    }
});