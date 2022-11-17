import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategories(req: Request, res: Response) {
  try {
    const { icon, name } = req. body;

    // Validação

    if (!icon || icon == null || icon == undefined) {
      return res.status(500).json({
        error: 'Icon invalid!'
      });
    }

    if (!name || name == null || name == undefined) {
      return res.status(500).json({
        error: 'Name invalid!'
      });
    }

    const category = await Category.create({ icon, name});

    res.status(201).json(category);

  } catch (err) {
    console.log(err);

    res.sendStatus(500);
  }
}
