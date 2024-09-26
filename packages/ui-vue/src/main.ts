import { App } from "vue";

// export individual components
import { default as FButton } from "./Button/Button.vue";

export { FButton };

// export the entire library as a plugin, so it can be installed via app.use()
// comment this out if you don't want to install the entire library

export default {
  install: (app: App) => {
    app.component("FButton", FButton);
  }
};
