const express = require('express');
const router = express.Router();
const { createRule, combineRules, evaluateRule } = require('../ast');
const db = require('../db');

// Create rule API
router.post('/create', (req, res) => {
    const { ruleString } = req.body;
    const ast = createRule(ruleString);
    db.saveRule(ruleString, ast);  // Save rule in database
    res.json(ast);
});

// Combine rules API
router.post('/combine', (req, res) => {
    const { rules } = req.body;  // List of rule strings
    const combinedAST = combineRules(rules);
    res.json(combinedAST);
});

// Evaluate rule API
router.post('/evaluate', (req, res) => {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
});

module.exports = router;
