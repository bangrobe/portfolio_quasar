import { defineStore } from "pinia";
import { api } from "boot/axios";
export const useBlogStore = defineStore("blog", {
  state: () => ({
    blog: [],
  }),
  getters: {
    getData: (state) => state.blog,
  },
  actions: {
    fetchPosts() {
      return new Promise((resolve, reject) => {
        let config = {
          method: "GET",
          url: "https://bangdigi.com/wp-json/wp/v2/posts/",
        };
        api
          .request(config)
          .then((response) => {
            resolve(response);
            if (response.data.length > 3) {
              this.blog = response.data.slice(0, 6);
            }
          })
          .catch((error) => {
            console.log("error:", error);
            reject(error);
          });
      });
    },
  },
});
