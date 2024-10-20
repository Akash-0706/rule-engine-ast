const { createRule, evaluateRule } = require('../backend/ast');

// Sample test case
const testRule = () => {
    const ast = createRule("age > 30 AND department = 'Sales'");
    const result = evaluateRule(ast, { age: 35, department: 'Sales' });
    console.log(result);  // Expected: true
};

testRule();
