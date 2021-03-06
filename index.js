// order of import statements matters, loaded asynchronously
import "./modules/scripts/processEvents.js"; // Node.js process events script
import "./modules/scripts/start.js"; // Starting message
import "./modules/scripts/env.js"; // Populates environment variables script
import "./modules/databases.js"; // Start database
import "./modules/webhook.js"; // Start webhook
import "./modules/discord.js"; // Start bot
