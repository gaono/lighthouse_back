// generate-types.js
const { execSync } = require('child_process');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in .env');
  process.exit(1);
}

const cmd = `pg-to-ts generate --conn "${process.env.DATABASE_URL}" --output src/models/dbTypesModel.ts --schema public`;

try {
  execSync(cmd, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Failed to generate types:', err.message);
}
