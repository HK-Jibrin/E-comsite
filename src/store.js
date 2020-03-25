import vue from "vue"
import  vuex from "vuex"

Vue.use(Vue);

const store = new Vuex.Store({
    state: {
      siteName: "A very Gruesome Site",
      pageName: "Home",
      products: [
        {
          id: 1,
          name: "Black Shoe"
        },
        {
          id: 2,
          name: "White Shoe"
        },
        {
          id: 3,
          name: "Red Bag"
        },
        {
          id: 4,
          name: "PS4"
        },
        {
          id: 5,
          name: "60' Samsung TV"
        },
        {
          id: 6,
          name: "B.O Sound system"
        }
      ],
      selectedProduct: null
    },
    mutations: {
      changePageName(state, data) {
        state.pageName = data;
      },
      setSelectedProductValue(state, product) {
        state.selectedProduct = product;
      }
    }
  });
  export default store;
