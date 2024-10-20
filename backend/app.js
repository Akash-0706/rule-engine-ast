const express = require('express');
const app = express();
const ruleRoutes = require('./routes/ruleRoutes');

app.use(express.json());
app.use('/api/rules', ruleRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
