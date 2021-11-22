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
const oneSecond = 1000;

const handleFalseNegativeErrors = (error, context) => {
	switch (error) {
		case falseNegativeErrors[0]:
			context.emit('tooManyResults', true);
			break;
		case falseNegativeErrors[1]:
			context.emit('zeroResult', true);
			break;
	}
};

export default {
	components: { ErrorDialog },
	setup(_, context) {
		const loading = ref(false);
		const items = ref([]);
		const search = ref('');
		const error = ref(null);
		let typingTimer;

		watch(search, () => {
			clearTimeout(typingTimer);
			items.value.length = 0;

			context.emit('tooManyResults', false);
			context.emit('zeroResult', false);

			if (!search.value) {
				context.emit('searchLoading', false);
				context.emit('updatedSearchResults', {
					searchValue: search.value,
					items: items.value,
					pages: 0
				});

				return;
			}

			typingTimer = setTimeout(() => {
				loading.value = true;

				context.emit('searchLoading', true);

				fetchSearchResults(search.value)
					.then(response => {
						const { Search, Error, totalResults } = response;

						if (Error) {
							if (!falseNegativeErrors.includes(Error)) {
								return Promise.reject(Error);
							}

							handleFalseNegativeErrors(Error, context);
						} else {
							items.value.length = 0;
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
			}, oneSecond);
		});

		return { loading, items, search, error };
	}
};
</script>
