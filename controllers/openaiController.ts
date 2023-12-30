import { NextFunction, Request, Response } from 'express';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const generateImage = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const response = await openai.images.generate({
      prompt: payload.prompt,
      n: 1,
      size: payload.size || '512x512',
    });

    res.status(200).json({
      success: true,
      image: response.data,
    });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "This image can't be generated!",
    });
  }
};

export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;

  if (!payload.prompt) {
    return res.status(404).send({
      success: false,
      error: 'Please provide a prompt',
    });
  }

  return next();
};
