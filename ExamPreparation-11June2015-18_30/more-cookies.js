/*globals module,console*/

function solve(args) {
    "use strict";
    let selectors = [];
    let current = null;


    for (let line of args) {
        if (isSelector(line)) {
            line = line.trim();
            let selector = line.substr(0, line.length - 1)
                .trim()
                .replace(/\s\s+/, " ");
            if (current) {
                let between = " ";
                if (selector[0] === "$") {
                    between = "";
                    selector.substr(1);
                }
                selector = '${current.selector}${between}${selector}';
            }
            selectors.push({
                "selector": selector,
                "parent": current,
                "props": []
            });
            //
        } else if (isProperty(line)) {
            line = line.trim();
            line = line.substr(0, line.length - 1).trim();
            let propValueArray = line.split(":").map(x => x.trim());
            let propValuePair = {
                "property": propValueArray[0],
                "value": propValueArray[1]
            };
            let property, value;
            current.props.push([property, value]);
        } else {
            // }
            if (current) {
                current = current.parent;
            }
            current = current.parent;
        }
    }
    for (var selector of selectors) {
        console.log('${selector.selector} {');
        for (let propertyValuePair of selector.props) {
            //TODO: finish 
        }
    }

    function isSelector(line) {
        return line.indexOf("{") >= 0;
    }

    function isProperty(line) {
        return line.indexOf(":") > 0;
    }
}


module.exports = solve;