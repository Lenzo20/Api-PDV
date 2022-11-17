import express from 'express';
import mongoose from 'mongoose';
import { router } from './router/router';
import path from 'node:path';


mongoose.connect('mongodb://127.0.0.1:27017/pdv')
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use('/admin', router);

    const PORT = 8080;

    app.listen(PORT, () => {
      console.log('Server on. PORT: ', PORT);

    });

    console.log('Conectado com o banco de dados com sucess');
  })
  .catch((err) => console.log('Erro ao se conectar', err));

