import * as tf from "@tensorflow/tfjs";

async function predict(features) {
  // JavaScript
  const model_link =
    "https://drive.google.com/open?id=1-YAH1oKF141fSnmIfIF7N8YnUXviTlD-";

  const model = await tf.loadLayersModel(model_link);
  console.log(model);
  return 1;
}

export default predict;
