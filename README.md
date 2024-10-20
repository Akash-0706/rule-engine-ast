# Rule Engine with AST

## Overview
This project implements a 3-tier rule engine application with a backend API that dynamically creates, combines, and evaluates user eligibility rules based on attributes such as age, department, salary, and experience.

### Features
- Abstract Syntax Tree (AST) for rule representation
- API for creating and combining rules
- Evaluation of rules against user data

## Setup

1. Install dependencies:
    ```bash
    npm install
    ```

2. Start the server:
    ```bash
    node backend/app.js
    ```

3. Open the frontend:
    - Access `frontend/index.html` via a local server or direct file access.

4. APIs:
    - `POST /api/rules/create`: Create a rule from a string.
    - `POST /api/rules/combine`: Combine multiple rules.
    - `POST /api/rules/evaluate`: Evaluate a rule against input data.

## Database
- SQLite is used for storing rules and metadata. The schema is automatically created when the app runs.
