<template>
	<v-app>
		<v-app-bar app color="teal" dark dense outlined>
			<v-toolbar-title>2020 Movies Listing </v-toolbar-title>

			<v-spacer></v-spacer>
		</v-app-bar>

		<Main />
	</v-app>
</template>

<script>
import Main from './components/Main.vue';

export default {
	name: 'App',

	components: {
		Main
	},
	setup() {
		return {};
	}
};
</script>
