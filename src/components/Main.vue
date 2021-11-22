<template>
	<v-main>
		<v-container>
			<v-row>
				<v-col cols="12">
					<movie-searcher
						@updatedSearchResults="updateSearchResults"
						@searchLoading="handleSearchLoading"
						@tooManyResults="handleTooManyResults"
						@zeroResult="handleZeroResult"
					/>
				</v-col>

				<v-col v-if="loading" cols="12" class="text-center">
					<v-progress-circular color="teal" indeterminate size="70" />
				</v-col>

				<v-col
					v-else-if="hasTooManyResults"
					cols="12"
					class="text-center"
				>
					Too many results. Keep searching!
				</v-col>

				<v-col v-else-if="isZeroResult" cols="12" class="text-center">
					No movies found
				</v-col>

				<v-row v-else-if="items.length > 0">
					<v-col v-for="item in items" :key="item.imdbID" cols="6">
						<movie-item :item="item" />
					</v-col>
				</v-row>

				<v-col v-if="isNextPageLoading" cols="12" class="text-center">
					<v-progress-circular color="teal" indeterminate size="70" />
				</v-col>

				<v-btn
					v-else-if="hasMultiplePages"
					dark
					block
					color="teal"
					class="mt-3"
					@click="fetchNextPage"
				>
					Load more
					<v-icon>mdi-download-multiple</v-icon>
				</v-btn>
			</v-row>

			<error-dialog v-if="error" :error="error" />
		</v-container>
	</v-main>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import MovieSearcher from './MovieSearcher.vue';
import MovieItem from './MovieItem.vue';
import { fetchSearchResults } from '../utils/fetch-movie-utils';
import ErrorDialog from './ErrorDialog.vue';

export default {
	components: { ErrorDialog, MovieSearcher, MovieItem },
	setup() {
		const items = ref([]);
		const currentPage = ref(1);
		const pages = ref(1);
		const searchValue = ref('');
		const loading = ref(false);
		const isNextPageLoading = ref(false);
		const hasTooManyResults = ref(false);
		const isZeroResult = ref(false);
		const error = ref(null);
		const hasMultiplePages = computed(
			() => pages.value > 1 && currentPage.value < pages.value
		);
		const updateSearchResults = event => {
			items.value = event.items;
			pages.value = event.pages;
			searchValue.value = event.searchValue;
			currentPage.value = 1;
		};
		const handleSearchLoading = event => {
			loading.value = event;
		};
		const fetchNextPage = () => {
			isNextPageLoading.value = true;
			currentPage.value++;

			fetchSearchResults(searchValue.value, currentPage.value)
				.then(response => {
					items.value.push(...response.Search);
				})
				.catch(fetchError => {
					console.error(fetchError);
					error.value = fetchError;
				})
				.finally(() => {
					isNextPageLoading.value = false;
				});
		};
		const handleTooManyResults = event => {
			hasTooManyResults.value = event;
		};
		const handleZeroResult = event => {
			isZeroResult.value = event;
		};

		return {
			loading,
			isNextPageLoading,
			error,
			items,
			hasMultiplePages,
			hasTooManyResults,
			isZeroResult,
			updateSearchResults,
			handleSearchLoading,
			handleTooManyResults,
			handleZeroResult,
			fetchNextPage
		};
	}
};
</script>
