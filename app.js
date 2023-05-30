const TaskApp = {
	data() {
		return {
			inputText: "Start Creating Tasks",
			isInputActive: false,

			tasks: [],
			tClass: {
				body: "bg-slate-700 text-slate-400 font-mono font-semibold",
				header: "bg-slate-900 flex gap-2 items-center",
				ol: "flex flex-col mt-10 ml-1 list-none pb-5",
				lineBreak: "h-0.5 bg-gray-400 ",
				h2: "mb-5 mt-5 text-4xl text-center",
				list: "task-item ml-6 border-l-4 border-blue-800 task-item bg-slate-900 p-5 mb-4 text-blue-400 text-xl",
				input:
					"ml-3 p-1.5 w-5/12 bg-slate-800 text-blue-200 outline-none focus-visible:bg-slate-300 focus-visible:text-blue-900",
			},
		};
	},
	methods: {
		saveTask(event) {
			event.preventDefault();
			console.log([1, 2, 3, 4, 5].toString());

			this.tasks.unshift(this.inputText);
			this.inputText = "";
			this.isInputActive = false;
		},
		applyClass(str = "header") {
			if (str == "header") {
				return this.tClass.header;
			}
		},
	},
};
Vue.createApp(TaskApp).mount("#app");
