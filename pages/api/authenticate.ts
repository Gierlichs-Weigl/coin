import { NextApiResponse } from 'next';

export default (_, res): NextApiResponse => {
  res.status(200).json({
    id: 1,
    author: 'Andrea Vassallo',
    company: 'Nebulab',
    image_url: 'http://placekitten.com/200/200',
    content: 'The cat is a domestic species of small carnivorous mammal.',
  });
};
