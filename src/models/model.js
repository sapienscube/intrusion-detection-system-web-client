import * as tf from "@tensorflow/tfjs";

function predict(features) {
  // const model_gh_link =
  //   "https://crossorigin.me/https://github.com/sapienscube/kddcup-intrusion-detection-system/blob/master/src/model.json";

  // const model_gdrive_link =
  //   "https://crossorigin.me/https://drive.google.com/open?id=1-YAH1oKF141fSnmIfIF7N8YnUXviTlD-";

  const model_relative_link = "./model.json";

  // const promise = tf.loadLayersModel(model_relative_link);
  // promise.then(data => console.log("model: ", data));
  // console.log("features[0]: ", features[0]);
  return features[0];
}

export default predict;
