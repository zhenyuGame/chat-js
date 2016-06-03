var chatLayer = cc.Layer.extend({

    ctor : function(){

        this._super();

        var size = cc.winSize;

        var chatLayer = ccs.load(res.chatLayer).node;

        chatLayer.setAnchorPoint(cc.p(0.5,0.5));
        chatLayer.ignoreAnchorPointForPosition(false);
        chatLayer.setPosition(cc.p(size.width/2,size.height/2));

        this.addChild(chatLayer);
        this.node = chatLayer;
    },

    onEnter : function(){

        this._super();

        this.init();
    },

    init : function(){

        this.initLogin();
    },

    initLogin : function(){

        var panel_login = ccui.helper.seekWidgetByName(this.node,"Panel_login");
        var btn_login = ccui.helper.seekWidgetByName(this.node,"btn_login");
        btn_login.addClickEventListener(function(){
            panel_login.setVisible(false);
        });
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