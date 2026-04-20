

const scriptsInEvents = {

	async Localize_Event5_Act1(runtime, localVars)
	{
		runtime.globalVars.lang = navigator.language.split('-')[0];
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
