import imageApi from "./imageapi";

const toUrlPath = path => {
  return `${imageApi} + ${path}`;
};

export default toUrlPath;
