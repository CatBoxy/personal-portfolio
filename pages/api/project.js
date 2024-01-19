import jsonData from '../../jsonData/projectData.json';

export default function handler(req, res) {
  res.status(200).json(jsonData);
}
