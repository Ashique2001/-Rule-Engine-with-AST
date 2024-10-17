// script.js

class Node {
    constructor(nodeType, value = null, left = null, right = null) {
        this.type = nodeType;  // "operator" or "operand"
        this.value = value;    // Only for operand nodes
        this.left = left;      // Left child for operators
        this.right = right;    // Right child for operators
    }
}

// Function to create AST from rule string
function createRule(ruleString) {
    const operators = ["AND", "OR"];

    function parseExpression(expr) {
        if (expr.includes("AND")) {
            const [left, right] = expr.split("AND");
            return new Node("operator", "AND", parseExpression(left.trim()), parseExpression(right.trim()));
        } else if (expr.includes("OR")) {
            const [left, right] = expr.split("OR");
            return new Node("operator", "OR", parseExpression(left.trim()), parseExpression(right.trim()));
        } else {
            // Operand (e.g., "age > 30")
            const match = expr.match(/(\w+)\s*(>|<|=)\s*([\w\d']+)/);
            if (match) {
                const [_, attr, operator, value] = match;
                const parsedValue = isNaN(value) ? value.replace(/'/g, "") : parseFloat(value);
                return new Node("operand", { attribute: attr, operator: operator, compareTo: parsedValue });
            } else {
                throw new Error("Invalid rule format");
            }
        }
    }

    return parseExpression(ruleString.trim());
}

// Function to evaluate rule AST
function evaluateRule(node, data) {
    if (node.type === "operator") {
        const leftEval = evaluateRule(node.left, data);
        const rightEval = evaluateRule(node.right, data);

        if (node.value === "AND") {
            return leftEval && rightEval;
        } else if (node.value === "OR") {
            return leftEval || rightEval;
        }
    } else if (node.type === "operand") {
        const { attribute, operator, compareTo } = node.value;
        const value = data[attribute];

        if (operator === '>') {
            return value > compareTo;
        } else if (operator === '<') {
            return value < compareTo;
        } else if (operator === '=') {
            return value === compareTo;
        }
    }
    return false;
}

// Event listener for Evaluate Button
document.getElementById("evaluateBtn").addEventListener("click", function () {
    const ruleInput = document.getElementById("rulesInput").value;
    const dataInput = document.getElementById("dataInput").value;
    const resultDiv = document.getElementById("result");

    try {
        const ast = createRule(ruleInput);
        const data = JSON.parse(dataInput);

        const result = evaluateRule(ast, data);
        resultDiv.innerText = result ? "User is eligible (True)" : "User is not eligible (False)";
    } catch (error) {
        resultDiv.innerText = `Error: ${error.message}`;
    }
});
