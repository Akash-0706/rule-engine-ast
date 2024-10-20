const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/rules.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS rules (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ruleString TEXT NOT NULL,
            ast JSON NOT NULL
        )
    `);
});

function saveRule(ruleString, ast) {
    const query = `INSERT INTO rules (ruleString, ast) VALUES (?, ?)`;
    db.run(query, [ruleString, JSON.stringify(ast)], function (err) {
        if (err) throw err;
        console.log("Rule saved with ID:", this.lastID);
    });
}

module.exports = { saveRule };
