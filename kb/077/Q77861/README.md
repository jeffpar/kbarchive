---
layout: page
title: "Q77861: Control Panel's Sound Won't Play Certain Wave Files"
permalink: /kb/077/Q77861/
---

## Q77861: Control Panel's Sound Won't Play Certain Wave Files

	Article: Q77861
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you play certain .WAV files within the Control Panel's Sound option in
	Windows version 3.0 with Windows Multimedia Extensions 1.0, the following error
	message may be displayed:
	
	  Unable to Play Sound
	
	or the message may not appear and no sound is played.
	
	In Windows version 3.1, the error message "Cannot Play the Selected Sound" is
	displayed.
	
	CAUSE
	=====
	
	The Sound option under Control Panel plays only 22.05 kHz .WAV files. It cannot
	play 11.025 kHz .WAV files. However, Sound Recorder plays both 11.025 kHz and
	22.05 kHz .WAV files, and saves in only 22.05 kHz format.
	
	WORKAROUND
	==========
	
	To troubleshoot and resolve this error, do the following:
	
	1. Ensure that the sound functions are working by playing a sound from the
	  MMDATA subdirectory. If this does not work, then there are driver/hardware
	  problems.
	
	2. Load the .WAV file that won't work under Control Panel into the Sound
	  Recorder. Then use Sound Recorder to save the .WAV file in 22.05 kHz so that
	  Control Panel's Sound option can work with the .WAV file.
	
	3. Try adjusting the sound a little in Sound Recorder. Increase or decrease the
	  volume once and save the file. Now try playing the file in Control Panel's
	  Sound option.
	
	
	KBCategory: kbmm kbsound
	KBSubcategory: win30
	
	Additional query words: 1.00 1.0 wave MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
