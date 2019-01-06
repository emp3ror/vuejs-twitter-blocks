import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import { settings } from './settings.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    key: 'pizza',
    storage: window.localStorage
  })

export const store = new Vuex.Store({
    modules: {
        settings
    },
    plugins: [vuexLocal.plugin]
});