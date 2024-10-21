# -Rule-Engine-with-AST  | User Eligibility Based on Dynamic Rules

## Objective
This project implements a simple 3-tier rule engine using an **Abstract Syntax Tree (AST)** to dynamically determine user eligibility based on various attributes like **age**, **department**, **income**, and **experience**. The rule engine allows the creation, modification, and combination of rules in real-time with a simple UI and backend logic.

## Key Features
- AST-based rule representation for dynamic rule creation and modification.
- Combine multiple rules efficiently using AND/OR operators.
- Real-time evaluation of rules against user-provided data attributes.
- Simple, user-friendly UI to input rules and attributes.
- Error handling for invalid rules and data formats.

##  Codebase Structure
The repository is structured to maintain clear separation between frontend, backend, and configuration files.
📁 rule-engine-ast/
│
├── 📁 css/                    # Stylesheets for the UI
│   └── style.css              # Main CSS file for styling the user interface
│
├── 📁 js/                     # JavaScript files for backend logic
│   └── script.js              # Core logic for AST generation and rule evaluation
│
├── 📁 html/                   # HTML structure for the UI
│   └── index.html             # Entry point for the application
│
└── 📁 assets/                 # (Optional) Static assets like images or icons

## Build Scripts
No complex build system is required since this project uses  JavaScript, HTML, and CSS.
To run the project, simply open the index.html file in any web browser—no compilation or build steps are necessary.

## Configuration Files
## 🛠️ Configuration Files
- **`package.json`**: (Optional) If you plan to expand the project with Node.js, add dependencies, or manage build scripts using tools like Webpack or Parcel.
   ```json
   {
     "name": "rule-engine-ast",
     "version": "1.0.0",
     "scripts": {
       "start": "node server.js"
     },
     "dependencies": {
       "express": "^4.17.1"
     }
   }

Non-Functional Considerations
## Security
Input Validation: Implemented input validation for all user-supplied data to prevent malicious injections and invalid rule strings from causing errors or breaches.
Rule String Sanitization: Sanitized the rule strings and attribute values to avoid potential security vulnerabilities like code injection.
Cross-Origin Resource Sharing (CORS): Configured CORS headers (if using an API server) to control access to resources from external domains securely.
HTTPS: Recommended use of HTTPS when deploying the application to ensure secure communication over the network.

## Performance Optimization
AST Caching: Once rules are compiled into ASTs, they are cached for reuse, minimizing recomputation and improving efficiency when similar rules are used.
Rule Combination Heuristics: When combining multiple rules, the system uses operator frequency heuristics to minimize redundant checks, enhancing performance for large datasets.
## Error Handling
Implemented comprehensive error handling for invalid rules, missing operators, or malformed attribute inputs, ensuring that users receive meaningful error messages and can correct their input easily.
##  Deployment Considerations
Can be deployed to cloud platforms such as Heroku, AWS, or Netlify for frontend and backend hosting.
