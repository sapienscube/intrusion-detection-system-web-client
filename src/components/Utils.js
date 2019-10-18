export function getFeaturesArray(features) {
  const cats = [];
  const nums = [];
  features.categorical.map(cat => cats.push(cat.placeholder));

  features.numerical.titles.map(title => nums.push(title.placeholder));

  const featuresArray = nums
    .slice(0, 1)
    .concat(cats)
    .concat(nums.slice(1));

  return featuresArray;
}
