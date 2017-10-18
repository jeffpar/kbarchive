---
layout: page
title: "Q100856: Compressed Waveform Files Don't Rewind or Repeat"
permalink: kb/100/Q100856/
---

## Q100856: Compressed Waveform Files Don't Rewind or Repeat

	Article: Q100856
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you play compressed waveform (.WAV) files from Media Player 2.0 that ships
	with Microsoft Video for Windows 1.0 and 1.0a, the Auto Rewind and Auto Repeat
	options may not work as expected.
	
	MORE INFORMATION
	================
	
	The Options dialog box in Media Player 2.0 contains a check box for Auto Repeat
	and another for Auto Rewind. When active, these check boxes should cause the
	playback of the current device to automatically rewind and then automatically
	repeat the active file. However, certain compressed waveform files will not
	rewind or repeat when these check boxes are active.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps require that you have the Hanna Barbara edition of Microsoft
	SoundBits installed on your system:
	
	1. Run or switch to Media Player version 2.0.
	
	2. From the Device menu, choose Sound. The Open dialog box should appear.
	
	3. Select BLIP.WAV from the SNDBITS/HB subdirectory and choose OK.
	
	4. From the Edit menu, choose Options and select the Auto Rewind and Auto Repeat
	  check boxes.
	
	5. Choose the Play button. (Note that the waveform file will not repeat or
	  rewind.)
	
	This problem affects only certain compressed waveform files, but has been
	reproduced in files from Microsoft's Windows Sound System and SoundBits.
	
	Workaround
	----------
	
	If any of the file attributes are changed, the file automatically repeats and
	automatically rewinds. These attributes include the file description, the
	picture associated with the file, and the file label. These attributes can be
	changed from Quick Recorder that ships with Windows Sound System.
	
	Additional query words: wss 1.00 wav Hanna-Barbera classic hollywood movies mgm Sound Bits musical instruments world wave form mediaplayer quickform
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
