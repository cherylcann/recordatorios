const mongoose = require("mongoose");
const keys = require("./keys.json");

mongoose.set('strictQuery', false);

mongoose.connect(keys.mongodb).catch(e => console.log(e))

mongoose.connection.once('open', _ => {
    console.log(`[DBs] En línea`);
});
mongoose.connection.on('error', e => {
    console.log("Error en la base de datos", e);
});