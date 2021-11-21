<template>
	<v-col cols="12">
		<v-combobox
			:items="items"
			:loading="loading"
			:search-input.sync="search"
			color="teal"
			hide-no-data
			item-text="Title"
			item-value="imdbID"
			label="2020 Movies"
			placeholder="Search a movie title released in 2020"
			return-object
		/>
		<error-dialog v-if="error" :error="error" />
	</v-col>
</template>

<script>
import { ref, watch, reactive } from '@vue/composition-api';
import { fetchSearchResults } from '../utils/fetch-movie-utils';
import ErrorDialog from './ErrorDialog.vue';
const falseNegativeErrors = ['Too many results.', 'Movie not found!'];

export default {
	components: { ErrorDialog },
	setup(_, context) {
		const loading = ref(false);
		const items = ref([]);
		const search = ref('');
		const error = ref(null);

		watch(search, () => {
			items.value.length = 0;

			if (search.value) {
				loading.value = true;

				context.emit('searchLoading', true);

				fetchSearchResults(search.value)
					.then(response => {
						const { Search, Error, totalResults } = response;

						if (Error) {
							if (!falseNegativeErrors.includes(Error)) {
								return Promise.reject(Error);
							}

							loading.value = false;
						} else {
							items.value.push(
								...Search.map(item => reactive(item))
							);
						}

						context.emit('updatedSearchResults', {
							searchValue: search.value,
							items: items.value,
							pages: Math.ceil(totalResults / 10) || 0
						});
					})
					.catch(fetchError => {
						console.error(fetchError);

						error.value = fetchError;
					})
					.finally(() => {
						loading.value = false;
						context.emit('searchLoading', false);
					});
			} else {
				context.emit('searchLoading', false);
				context.emit('updatedSearchResults', {
					searchValue: search.value,
					items: [],
					pages: 0
				});
			}
		});

		return { loading, items, search, error };
	}
};
</script>
