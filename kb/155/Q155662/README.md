---
layout: page
title: "Q155662: Monster Truck Madness: Audio Troubleshooting"
permalink: /kb/155/Q155662/
---

## Q155662: Monster Truck Madness: Audio Troubleshooting

{% raw %}

	Article: Q155662
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	1.0
	WINDOWS
	kbusage kbreadme kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article discusses ways to troubleshoot audio problems you may
	encounter when running Monster Truck Madness. This information is from the
	Monster Truck Madness Readme.txt file.
	
	SOUND DOES NOT PLAY CORRECTLY
	
	If Monster Truck Madness does not play sound properly, try the
	following list of troubleshooting steps.
	
	Verify that your speakers and the Windows 95 volume control are
	  enabled and turned up.
	
	Confirm that you do not have Mute Sound selected on the Options
	  menu in Monster Truck Madness.
	
	Verify that Windows 95 can play .wav files:
	
	  1. Click the Start button, point to Settings, and then click
	     Control Panel.
	
	  2. Double-click the Sounds icon.
	
	  3. Try to play a .wav file.
	
	If Windows 95 is not able to play a .wav file, check to see
	  that a sound card is enabled:
	
	  1. Click the Start button, point to Settings, and then click
	     Control Panel.
	
	  2. Double-click the System icon.
	
	  3. Click the Device Manager tab.
	
	  4. Click the plus sign next to Sound, Video and Game Controllers.
	
	  5. If there is no Sound, Video and Game Controllers entry or
	     you have no sound card listed under this entry, contact the
	     manufacturer of your computer or sound card and request help
	     reinstalling the sound card drivers.
	
	If you are able to play a .wav file in Windows 95, ensure that
	  sounds are enabled and recognized in Monster Truck Madness:
	
	  1. Start Monster Truck Madness.
	
	  2. On the Options menu, click Sound.
	
	  3. Verify that the Play Sound Effects and/or Play Music check
	     boxes are selected.
	
	  4. Click Advanced.
	
	  5. Verify that Monster Truck Madness recognizes a sound card by
	     looking under the Sound Card Detected label. The name of your
	     sound card should be displayed.
	
	  6. To see if Monster Truck Madness will play a sound file, click
	     Test.
	
	SOUND CLIPPED OR DELAYED
	
	If sound in Monster Truck Madness seems clipped or delayed, try the
	following troubleshooting steps:
	
	On the Options menu, click Sound.
	
	Click Advanced.
	
	If the sound is choppy or clipped, increase the number of buffers
	  slightly. If there is a delay in the sound effects, decrease the
	  number of buffers slightly.
	
	To apply the new settings and hear the results, click Test.
	
	If the sound is still clipped, increase the buffer size slightly,
	  and then click Test. If you decrease the buffer size too much, the
	  sound will seem choppy.
	
	Continue to experiment until the sound is smooth and timed
	  appropriately.
	
	NOTE: You can always restore original settings by clicking Default.
	
	ENSONIQ SOUNDSCAPE CARD INFORMATION
	
	If you're having problems installing Monster Truck Madness with the
	Ensoniq Soundscape sound card, but you know that there is nothing
	wrong with the sound card, try this:
	
	Click Start, point to Settings, and then click Control Panel.
	
	Double-click System.
	
	In the System Properties dialog box, click the Device Manager tab.
	
	Double-click Sound, Video and Game Controllers.
	
	Click Ensoniq Soundscape, and then click Properties.
	
	In the Ensoniq Soundscape dialog box, click the DOS Settings tab.
	
	Under Synth Routing, make sure Internal is selected.
	
	Close all dialog boxes and reboot.
	
	Reinstall Monster Truck Madness.
	
	Additional query words: 1.00 Monster Truck Madness improve sound performance increase not playing correctly sounds distorted distortion
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbMonsterTMSearch kbMonsterTM
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
