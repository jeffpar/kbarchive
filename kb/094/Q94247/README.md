---
layout: page
title: "Q94247: WSS Err Msg: Cannot Find the SNDSYS Driver"
permalink: /kb/094/Q94247/
---

## Q94247: WSS Err Msg: Cannot Find the SNDSYS Driver

	Article: Q94247
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Windows Sound System and a SNDSYS.DRV entry is not present in
	the [DRIVERS] section of the SYSTEM.INI file, the following error may occur:
	
	  Cannot find the SNDSYS Driver
	
	Correctly setting up the [DRIVERS] section in the SYSTEM.INI file may correct
	this problem.
	
	MORE INFORMATION
	================
	
	This problem can be caused if the [Drivers] section in the SYSTEM.INI file is
	not set up correctly.
	
	This section should be configured in the following manner:
	
	  [DRIVERS]
	  MIDIMAPPER=MIDIMAP.DRV
	  TIMER=TIMER.DRV
	  WAVE=SNDSYS.DRV
	  AUX=SNDSYS.DRV
	  MIDI=SNDSYS.DRV
	  WAVEMAPPER=MSACM.DRV
	
	If WAVE=SNDSYS.DRV is not present, Volume Control, Recording Control, Voice
	Pilot, Quick Recorder, and Sound Finder will not load. Also, if AUX=SNDSYS.DRV
	is not present, Volume Control, Recording Control, Voice Pilot, and Sound Finder
	will also not load.
	
	NOTE: This message can also occur if in the "drivers=" line is missing from the
	[boot] section of the SYSTEM.INI, This line usually reads as follows:
	
	  drivers=mmsystem.dll
	
	If this line is missing, use a text editor (such as Notepad) to edit your
	SYSTEM.INI file, and re-enter the line.
	
	Additional query words: 1.00 1.00a 2.00 setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
