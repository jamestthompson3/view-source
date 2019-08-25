const axios = require("axios");
const prettier = require("prettier");

module.exports = async (req, res) => {
  const fetched = await axios.get(req.body.url);
  const formatted = prettier.format(fetched.data, { parser: "html" });
  return res.send(formatted);
};
