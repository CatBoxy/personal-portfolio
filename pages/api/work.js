import jsonData from '../../jsonData/workData.json';

export default function handler(req, res) {
  res.status(200).json(jsonData);
}
