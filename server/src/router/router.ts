import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from '../app/useCases/categories/listCategories';
import { createCategories } from '../app/useCases/categories/createCategories';
import { listProducts } from '../app/useCases/products/listProducts';
import { createProducts } from '../app/useCases/products/createProducts';
import { listProductsByCategory } from '../app/useCases/categories/listProductsByCategory';
import { listOrders } from '../app/useCases/order/listOrders';
import { createOrders } from '../app/useCases/order/createOrders';
import { chanceOrderStatus } from '../app/useCases/order/chanceOrderStatus';
import { cancelOrder } from '../app/useCases/order/cancelOrder';

export const router = Router();

// Salvar a imagem na pasta uploads
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../../', 'uploads'));
    },
    filename(req, file, callback) {
      // Será salvo com o horario atual e o nome original da foto que está na maq da pessoa
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrders);

// Change order status
router.patch('/orders/:orderId', chanceOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
