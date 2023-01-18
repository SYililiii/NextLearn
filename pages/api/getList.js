// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { allList } from '../../data/list';

const findItem = (id) => {
  return allList.filter(value => {
    return value.id == id;
  })
}

export default function handler(req, res) {
  const _id = req.query.id;
  let result = {};

  if (_id) {
    result.list = findItem(_id);
  } else {
    result.list = allList;
  }

  res.status(200).json(result);
}
