import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    // Validação
    if (!name || name == null || name == undefined) {
      return res.status(500).json({
        error: 'name invalid!'
      });
    }

    if (!description || description == null || description == undefined) {
      return res.status(500).json({
        error: 'description invalid!'
      });
    }

    if (!price || price == null || price == undefined) {
      return res.status(500).json({
        error: 'price invalid!'
      });
    }

    if (!category || category == null || category == undefined) {
      return res.status(500).json({
        error: 'category invalid!'
      });
    }

    const products = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients): []
    });

    res.status(201).json({products});

  } catch (err) {
    console.log(err);

    res.sendStatus(500);
  }
}
