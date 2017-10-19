---
layout: page
title: "Q114366: Device Errors Occur When Using Windows Sound System Apps"
permalink: /kb/114/Q114366/
---

## Q114366: Device Errors Occur When Using Windows Sound System Apps

	Article: Q114366
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error messages below after installing Windows Sound System.
	
	Trying to play a file in Media Player:
	
	  This device cannot play.
	
	Starting Sound Finder:
	
	  There is no output device available. Sound Finder will close.
	
	Starting Quick Recorder:
	
	  Can't find recording and playback device.
	
	Turning on the microphone in Voice Pilot:
	
	  The speech driver software could not find any compatible hardware. Error
	  16386
	
	Using Proof Reader to proof an entry:
	
	  The sound output is currently busy.
	
	NOTE: Even when you receive the above error messages, the Audio Control
	application may load and work correctly.
	
	CAUSE
	=====
	
	These errors occur when the drivers= entry is not set correctly under the [BOOT]
	section of the SYSTEM.INI file. For Windows Sound System to work properly, the
	following three drivers must be loaded on the drivers= line in the [boot]
	section:
	
	  [boot]
	  drivers=mmsystem.dll msmixmgr.dll sndevnts.drv
	
	NOTE: The drivers= line is generally the last entry in this section, but it may
	appear anywhere in the [boot] section.
	
	The first driver, MMSYSTEM.DLL, should have been loaded with the installation of
	Windows. The last two entries are added when the Windows Sound System is loaded.
	If any of these drivers are not listed on this line, you receive the
	aforementioned error messages.
	
	RESOLUTION
	==========
	
	To correct the above error messages, make sure that all three drivers are on the
	drivers= line of the SYSTEM.INI file. Verify that these .DLL files are in the
	SYSTEM subdirectory of the Windows directory. If they are not present, you need
	to reinstall either Windows or Windows Sound System, depending on which files
	are missing.
	
	Additional query words: 2.00 set up driver drive drivers subdirectory err msg errs errors
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	
