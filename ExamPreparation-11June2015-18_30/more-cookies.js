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
                    selector = selector.substr(1);
                }
                selector = `${current.selector}${between}${selector}`;
            }
            selectors.push({
                "selector": selector,
                "parent": current,
                "props": []
            });

            current = selectors[selectors.length - 1];
        } else if (isProperty(line)) {
            line = line.trim();
            line = line.substr(0, line.length - 1)
                .trim();
            let propValueArray = line.split(":")
                .map(x => x.trim());

            current.props.push({
                "property": propValueArray[0],
                "value": propValueArray[1]
            });
        } else {
            current = current.parent;
        }
    }
    for (let selector of selectors) {
        console.log(`${selector.selector} {`);
        for (let propertyValuePair of selector.props) {
            console.log(`  ${propertyValuePair.property}: ${propertyValuePair.value};`);
        }
        console.log("}");
    }

    function isSelector(line) {
        return line.indexOf("{") >= 0;
    }

    function isProperty(line) {
        return line.indexOf(":") >= 0;
    }
}


module.exports = solve;