const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Recebido da Shopee:', req.body);
  res.status(200).json({ status: 'success' });
});

app.get('/', (req, res) => {
  res.send('Webhook está rodando.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
