
var elementSchema = require('../element');

module.exports = {
    name: "div",
    description: '',
    schema: elementSchema.concat([]),
    dependencies: [],    
    get() {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        // return React.DOM.div;
        return {
            render(){
                return React.createElement.apply(React, ['div', this.props].concat([this.props.children]) )
            }
        }
    }
}