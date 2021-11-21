<template>
	<v-dialog persisten v-model="dialog">
		<v-card>
			<v-card-title class="red--text">Error</v-card-title>

			<v-card-text class="red--text">
				An unexpected error occurred.
				<a href="#" @click="reloadPage">Click here</a>
				to reload the page and try again.
			</v-card-text>

			<v-card-text class="red--text">
				Error message:
				<p>{{ error }}</p>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['error'],
	setup() {
		const reloadPage = () => window.location.reload();
		return { dialog: true, reloadPage };
	}
};
</script>
