const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS/ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default products;
