import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import vueCompositionApi from './plugins/vue-composition-api';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	vueCompositionApi,
	render: h => h(App)
}).$mount('#app');
