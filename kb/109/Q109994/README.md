---
layout: page
title: "Q109994: Sound System: Microphone Doesn't Work with Microphone Input"
permalink: kb/109/Q109994/
---

## Q109994: Sound System: Microphone Doesn't Work with Microphone Input

	Article: Q109994
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you plug the microphone included with Windows Sound System into the
	microphone input on your sound card, you may find that Voice Pilot and Quick
	Recorder/Sound Recorder don't work. This problem can occur if you are using a
	sound card other than the Microsoft Sound Card.
	
	The Windows Sound System microphone is a phantom power microphone, which means it
	requires the sound card to supply power to it. Some audio cards, such as the
	Microsoft Sound Card, the Sound Blaster 16 card, and some Media Vision Pro Audio
	Studio cards, can provide power to the microphone directly through the
	microphone input. Most cards, however, cannot.
	
	NOTE: If you have a microphone that is not a phantom power microphone, you should
	be able to plug it into the microphone input on your sound card and use Voice
	Pilot and Quick Recorder/Sound Recorder successfully.
	
	The microphone included with Windows Sound System is a phantom power microphone
	because this kind of microphone provides better frequency response.
	
	RESOLUTION
	==========
	
	To use a phantom power microphone correctly with cards that do not provide power
	through the microphone input, you must use the adapter that is included with
	Windows Sound System. To connect the adapter correctly, follow these steps:
	
	1. Connect the 15-pin connector on the adapter to the joystick port on your
	  sound card.
	
	2. Plug your microphone jack into the adapter's female 1/8th inch stereo
	  connector.
	
	3. Plug the adapter's male 1/8th inch stereo connector into the line-in input on
	  your sound card.
	
	The microphone should now work correctly with Windows Sound System.
	
	NOTE: Use the audio control utility to adjust the recording and voice command
	levels, which are used by Voice Pilot and Quick Recorder/Sound Recorder. If
	these levels are too low, Voice Pilot and Quick Recorder/ Sound Recorder may
	appear not to work.
	
	MORE INFORMATION
	================
	
	The adapter provided with Windows Sound System provides power to the microphone
	from the joystick port. It also amplifies the microphone's signal to line level,
	and delivers it to the line-in input on the sound card.
	
	Additional query words: 2.00 board jack oem
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
