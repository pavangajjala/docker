const keyValueDb = ProcessingInstruction.env.KEY_VALUE_DB;
const keyValueUser = ProcessingInstruction.env.KEY_VALUE_USER;
const keyValuePassword = ProcessingInstruction.env.KEY_VALUE_PASSWORD;

db = db.getSiblingDB(keyValueDb);

db.createUser(
    {
        user: keyValueUser,
        pwd: keyValuePassword,
        rules: [
            {
                role: 'readWrite',
                db: 'key-value-db'
            }
        ]
    }
)