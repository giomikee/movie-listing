<template>
	<div>
		<v-card @click="toggleViewDetail" class="item">
			<v-img
				contain
				:src="poster"
				height="250px"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			>
				<v-card-title v-text="item.Title" class="pb-0" />

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="primary">
						Details
						<v-icon>mdi-movie-open-cog</v-icon>
					</v-btn>
				</v-card-actions>
			</v-img>
		</v-card>

		<movie-detail
			:item="item"
			:poster="poster"
			:viewDetail="viewDetail"
			@closedDialog="toggleViewDetail"
		/>
	</div>
</template>

<script>
import { ref } from '@vue/composition-api';
import MovieDetail from './MovieDetail.vue';

export default {
	components: { MovieDetail },
	props: { item: Object },
	setup(props) {
		const viewDetail = ref(false);
		const poster = ref('');
		const toggleViewDetail = () => {
			viewDetail.value = !viewDetail.value;
		};

		if (props.item && props.item.Poster && props.item.Poster !== 'N/A') {
			poster.value = props.item.Poster;
		}

		return { poster, viewDetail, toggleViewDetail };
	}
};
</script>

<style scoped>
.item:hover {
	cursor: 'click';
}
</style>
