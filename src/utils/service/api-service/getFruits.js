import { FRUITS } from "../../../constants";

export const filterFruits = async (keyword) => {
  const filteredFruits = FRUITS.filter((fruit) => {
    return fruit
      .toLowerCase()
      .substring(0, fruit.length)
      .includes(keyword.toLowerCase());
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filteredFruits);
    }, 200);
  });
};
