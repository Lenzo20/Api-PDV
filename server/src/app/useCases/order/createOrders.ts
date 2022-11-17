import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    // Validação

    if (!table || table == null || table == undefined) {
      return res.status(500).json({
        error: 'table invalid'
      });
    }

    if (!products || products == null || products == undefined) {
      return res.status(500).json({
        error: 'products invalid'
      });
    }

    const orders = await Order.create({
      table,
      products
    });

    res.status(201).json({orders});

  } catch (err) {
    console.log(err);

    res.sendStatus(500);
  }
}
