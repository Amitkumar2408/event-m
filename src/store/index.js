import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271276811.jpg?k=eb170471a2bcddc37dd2012c6448a343186f82749625cbd3f4628b7acb7c4127&o=&hp=1",
          title: "Maldives Amit",
          description: "Awesome trip to the blue waters",
        },
        {
          id: "m2",
          image:
            "https://im.whatshot.in/img/2021/Jan/screenshot-236-cropped-1611558772.png",
          title: "Coorg",
          description: "Wonderful trip to the southern mountains",
        },
        {
          id: "m3",
          image:
            "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/SHIMLA.jpeg?p8rkDgUaxdIezLOdixVSYZfIdYEkHBUU",
          title: "Shimla",
          description: "Wonderful trip to the snow mountains up north",
        },
        {
          id: "m4",
          image:
            "https://cache.marriott.com/marriottassets/marriott/GOIMC/goimc-pool-6467-hor-feat.jpg",
          title: "Goa",
          description: "Lovely trip to the beaches",
        },
        {
          id: "m5",
          image:
            "https://www.adotrip.com/public/images/city/master_images/5e4132409e959-Wagah_Border_Package_Tour.jpg",
          title: "Wagah",
          description: "Patriotic trip to the borders",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
  },
});

export default store;
