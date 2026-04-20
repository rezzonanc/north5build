

const scriptsInEvents = {

	async Localize_Event7_Act1(runtime, localVars)
	{
		runtime.globalVars.lang = navigator.language.split('-')[0];
	},

	async Localize_Event13_Act1(runtime, localVars)
	{
		const messages_arr = [
			["en"],
			["Introduction_Command"],
			["Welcome to base NORTH-5. You are required, by typing commands in the console, to scan the radar, aim the crosshair, and eliminate enemy forces. Movement commands: “left”, “right”, “up”, “down”. Then specify the number of cells to move the crosshair. For scanning, type “scan”, and “fire” to shoot. Return to your duties - the first enemy has already appeared on the radar. To close the message, type “close”; to return to work, type “back”."],
			["Instruction_Command"],
			["Scan the battlefield: type “scan” in the console. The dots are enemies. Aim at the enemy using the commands “left”, “right”, “up”, and “down”. Type “fire” to shoot. Example commands: “left 4 up 2 fire”, “down 3 right 4 scan”. You can use “scan” and “fire” separately as well. You can switch between emails using the “up” and “down” commands. Don’t forget to scan the battlefield. Check your mail. Good luck!"],
			["Hello_Falcon"],
			["Hi, I’m the operator from the neighboring NORTH-4 base. Are you new here? My callsign is Falcon - nice to meet you. I’m really glad I finally have someone to talk to, because this job is deadly boring. Sitting on your ass all day, aiming the sights, and destroying blips on the radar would drive anyone to the grave. Anyway, we’ll talk again later. I can see two new contacts here, and judging by their speed, they’re tanks. Bye for now!"],
			["No title_Falcon"],
			["Falcon calling. How was your first day on the job? Didn’t fall asleep from boredom, did you? Better not doze off - if you do, the Ksarians will reach your base and capture you. Trust me, ending up as a prisoner of those bastards from Ksaria is worse than death. If that happened to me, I’d put myself down on the spot with the first thing I could grab."],
			["Interference_Command"],
			["Interference will periodically appear on the radar, obstructing the targeting system. You are required to adapt to the changing conditions and continue carrying out your combat mission."],
			["Callsign_Falcon"],
			["Did I ever tell you why they gave me the callsign Falcon? I have a very high hit rate: almost every shot I fire destroys those damned Ksarians. That is why they nicknamed me Falcon - because, they say, I have eyesight as sharp as a falcon’s. Falcons can spot small prey from a distance of one kilometer. Just saying - I am not bragging, just sharing."],
			["Thoughts Aloud_Falcon"],
			["I do not mind that you are not replying to me. I understand: maybe you are shy, or afraid of being distracted from work by your mail. I do not care whether my messages get through. I write because I am bored. Sometimes, while destroying blips, I start thinking that Ksarians are soldiers just like me. They have names, thoughts, personalities, and people who love them and are waiting for them at home. These thoughts distract me from carrying out the mission. Do not let them in."],
			["No title_Falcon"],
			["If I were president, I would end this war in two days. On the morning of the first day, we would go into a full defensive stance and announce our desire to hold negotiations, and by the evening of the second day, all soldiers on both sides would be heading home. I've already destroyed too many dots on this damn radar, yet nothing has changed. To be honest, sometimes I wish I would become just another dot on someone’s radar, and my life would be ended by typing a single command into a console."],
			["They are coming_Falcon"],
			["There are more Ksarians now - be careful. It seems they are planning something. I may no longer be able to get in touch, since I have more work than I can handle."],
			["No title_Falcon"],
			["oh god help us there are too many of them they are already breaking through to the base command said there is a big blip on the radar and if we destroy it we can stop the offensive i’ll try to do it god save us"],
			["Order_Command"],
			["The enemy forces are advancing. The only way to stop them is to destroy the huge fat blip on the radar. It is a fuel depot - they will be wiped out by the explosion. You are ordered to destroy it. Act immediately."]
		];
		
		const othertext_locals = [
			["en"],
			["You have received a new message. Type “email” in the console and “open” to read it. Type “back” to return to work."],
			["Volume"],
			["Language"],
			["English"],
			["Destroyed:"],
			["Movement:"],
			["Radar:"],
			["Email:"],
			["Other:"],
			["example:"],
			["press E to read"],
			["NEWS"],
			["In response to the enemy’s large-scale offensive on the northern border, the crew of Headquarters “NORTH-5” heroically sacrificed themselves by destroying their base in order to prevent the enemy from capturing it. This deed will forever remain in the memory of our Great Country as a model example of selflessness and devotion to the motherland."]
		];
		
		const commands = [
			["en"],
			["right"],
			["left"],
			["up"],
			["down"],
			["fire"],
			["scan"],
			["email"],
			["restart"],
			["SIGNAL LOST"],
			["type restart"],
			["open"],
			["close"],
			["back"],
			["settings"],
			["exit"],
			["kill"]
		];
		
		const messages = runtime.objects.messages.getFirstInstance();
		messages.setSize(1, messages_arr.length);
		
		for (let y = 0; y < messages_arr.length; y++) {
			messages.setAt(messages_arr[y][0], 0, y, 0);
		}
		
		const othertext = runtime.objects.othertext_locals.getFirstInstance();
		othertext.setSize(1, othertext_locals.length);
		
		for (let y = 0; y < othertext_locals.length; y++) {
			othertext.setAt(othertext_locals[y][0], 0, y, 0);
		}
		
		const cmds = runtime.objects.commands.getFirstInstance();
		cmds.setSize(1, commands.length);
		
		for (let y = 0; y < commands.length; y++) {
			cmds.setAt(commands[y][0], 0, y, 0);
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
