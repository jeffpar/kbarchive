---
layout: page
title: "Q94800: WSS Voice Pilot Deactivated When Playing Waveform (.WAV) Files"
permalink: /kb/094/Q94800/
---

## Q94800: WSS Voice Pilot Deactivated When Playing Waveform (.WAV) Files

	Article: Q94800
	Product(s): Miscellaneous Windows Products
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Windows Sound System (WSS) audio board to play waveform
	(.WAV) files you will not be able to simultaneously use the Windows Sound System
	Voice Pilot tool.
	
	MORE INFORMATION
	================
	
	Voice Pilot is a tool provided with the Windows Sound System that enables you to
	control your computer by issuing verbal commands through the Windows Sound
	System microphone. Voice Pilot is trained to recognize voice commands for many
	popular Windows-based applications.
	
	Voice Pilot is designed to deactivate itself and the microphone whenever the
	digital-to-analog converter (DAC) on the Windows Sound System sound board is
	being used to play digital sound (.WAV sound files). When the .WAV sound file
	has finished playing, Voice Pilot and the microphone are reactivated.
	
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Voice Pilot.
	
	2. Select the Menu button from the tool bar.
	
	3. Choose Options.
	
	4. In the Options dialog box, choose Input Level.
	
	5. Run the Sound Finder application and play a .WAV sound file.
	
	These steps display the Voice Pilot, Recording Control, and Sound Finder
	applications on your screen. When you play a .WAV sound file in sound finder,
	the input level indicators in Recording Control are turned off. Also, Voice
	Pilot will no longer provide feedback in the Recognized box for any voice
	commands issued while the .WAV sound file is playing. Both of these Windows
	Sound System features are disabled when Voice Pilot determines that the DAC is
	in use.
	
	Workaround
	----------
	
	It is possible to play MIDI sound files and maintain the use of Voice Pilot.
	Because MIDI files are not digitized sound, utilization of the DAC is not
	required to play MIDI files. Therefore, Voice Pilot and the microphone will
	continue to be accessible when playing MIDI files.
	
	NOTE: Any background noise, including sound produced by playing MIDI files, will
	be a factor in Voice Pilot's ability to accurately perform voice recognition.
	Voice Pilot operates by comparing the input produced by the user's voice
	commands with acoustic models stored as vocabularies. The additional input
	produced by the background noise can make it difficult for Voice Pilot to
	recognize the user's command and find a match in the stored vocabulary.
	
	For more information about Voice Pilot, see Chapter 8 of the "Microsoft Windows
	Sound System User's Guide" or query on the following word in the Microsoft
	Knowledge Base:
	
	  WSS
	
	Additional query words: 1.00 voice
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	Version           : 1.00
	
	=============================================================================
	
