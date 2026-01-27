const Ajv = require("ajv");
const fs = require("fs");
const path = require("path");

const ajv = new Ajv({ allErrors: true });
require("ajv-formats")(ajv); // Activa 'uri', 'email', etc.

const schema = JSON.parse(fs.readFileSync("schemas/resource.schema.json", "utf-8"));

function validateFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const valid = ajv.validate(schema, data);
  if (!valid) {
    console.error(`Validation errors in ${filePath}:`, ajv.errors);
    process.exit(1);
  } else {
    console.log(`${filePath} ✅ valid`);
  }
}

// Buscar todos los recursos
const walk = (dir) => fs.readdirSync(dir).forEach(f => {
  const full = path.join(dir, f);
  if (fs.statSync(full).isDirectory()) walk(full);
  else if (f.endsWith(".json")) validateFile(full);
});

walk("resources");
