
module.exports = require('./div.jsx');

if(module.hot) {
    module.hot.accept('./div.jsx', function() {

        var div = require('./div.jsx');
        
        core.injector.revoke(div.name);
        core.Component(div);
        core.emit('hotUpdate');
        
    });
}