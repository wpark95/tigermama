const app = require('./app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
  Server Using Port ${PORT}
	`);
});
