import axios from "axios";

export default {
  getTwitterData
};

function getTwitterData(handle) {
  const url =
    "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=" +
    handle;
  return axios.get(url).then(response => response.data);
}
