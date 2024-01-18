import jsonData from '../../data/work/work.json';

export default function handler(req, res) {
  res.status(200).json(jsonData);
}
