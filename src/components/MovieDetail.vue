<template>
	<v-dialog
		v-model="viewDetail"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<v-card>
			<v-toolbar dark color="teal">
				<v-btn icon dark @click="closeDialog">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>Movie Details</v-toolbar-title>
			</v-toolbar>

			<v-img
				contain
				:src="poster"
				class="white--text align-end"
				max-height="300px"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			>
				<v-card-title v-text="item.Title" class="pb-0" />
			</v-img>

			<v-card-text v-if="loading" class="text-center mt-3">
				<v-progress-circular color="teal" indeterminate size="70" />
			</v-card-text>

			<v-card-text v-else-if="itemDetails" class="mt-3">
				<v-card-subtitle>
					{{ itemDetails.Plot }}
				</v-card-subtitle>

				<v-row
					v-if="
						autoRenderedItemProperties &&
						autoRenderedItemProperties.length > 0
					"
				>
					<v-col
						v-for="(property, index) in autoRenderedItemProperties"
						:key="index"
						cols="6"
					>
						<b>{{ property }}:</b>

						{{ itemDetails[property] }}
					</v-col>
				</v-row>

				<v-row
					v-if="itemDetails.Ratings && itemDetails.Ratings.length > 0"
				>
					<v-col cols="12">
						<b>Ratings:</b>
					</v-col>

					<v-col
						v-for="rating in itemDetails.Ratings"
						:key="rating.Source"
						cols="4"
					>
						<li>
							<b>{{ rating.Source }}:</b>
							{{ rating.Value }}
						</li>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>

		<error-dialog v-if="error" :error="error" />
	</v-dialog>
</template>

<script>
import { computed, ref, watch } from '@vue/composition-api';
import { MOVIE_DETAILS_CACHE } from '../utils/movie-details-cache';
import { EXCLUDED_AUTO_RENDER_PROPERTIES } from '../utils/constants';
import { fetchMovieDetails } from '../utils/fetch-movie-utils';
import ErrorDialog from './ErrorDialog.vue';
export default {
	components: { ErrorDialog },
	props: { item: Object, poster: String, viewDetail: Boolean },

	setup(props, context) {
		const loading = ref(false);
		const error = ref(null);
		const itemDetails = ref(MOVIE_DETAILS_CACHE[props.item.imdbID]);
		const closeDialog = () => {
			context.emit('closedDialog');
		};
		const autoRenderedItemProperties = computed(() => {
			if (!itemDetails || !itemDetails.value) {
				return [];
			}
			return Object.keys(itemDetails.value).filter(
				property =>
					!EXCLUDED_AUTO_RENDER_PROPERTIES.includes(property) &&
					itemDetails.value[property] &&
					itemDetails.value[property] !== 'N/A'
			);
		});

		watch(
			() => props.viewDetail,
			() => {
				if (props.viewDetail && !itemDetails.value) {
					loading.value = true;

					fetchMovieDetails(props.item.imdbID)
						.then(response => {
							itemDetails.value = response;
							MOVIE_DETAILS_CACHE[props.item.imdbID] = response;
						})
						.catch(fetchError => {
							console.error(fetchError);
							error.value = fetchError;
						})
						.finally(() => {
							loading.value = false;
						});
				}
			}
		);

		return {
			loading,
			error,
			itemDetails,
			autoRenderedItemProperties,
			closeDialog
		};
	}
};
</script>
