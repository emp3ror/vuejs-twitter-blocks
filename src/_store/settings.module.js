const state = {
	setting : []
};

const actions = {
	addToSetting : (context, item) => {
		context.commit("ADD_TO_SETTINGS",item);
	}
};

const getters = {
	getSettings : (title) => {
		return state.setting[title];
	}
};

const mutations = {
	ADD_TO_SETTINGS : (state,item) => {
		state.setting[item.title] = item.data;
	}
}