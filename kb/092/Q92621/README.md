---
layout: page
title: "Q92621: Err Msg: There Are One or More User or Voice Data Files..."
permalink: /kb/092/Q92621/
---

## Q92621: Err Msg: There Are One or More User or Voice Data Files...

	Article: Q92621
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
	
	In Windows Sound System, if a vocabulary file or user file is missing or
	corrupted you may receive the following error message:
	
	  There are one or more user (*.usr) or voice (*.vcb) data files in the
	  VOICEPIL.INI that cannot be found. The Voice Pilot will resort to using the
	  default file as a substitute.
	
	MORE INFORMATION
	================
	
	If you start Voice Pilot and the above error message is displayed, a vocabulary
	file (.VCB) or a user file (.USR) has been deleted or is missing from the
	Windows Sound System directory and no modification has been made to the
	VOICEPIL.INI file.
	
	To correct the error message, use the following steps:
	
	1. Look at the Windows Sound System directory and note the user .USR and .VCB
	  data files that are listed.
	
	2. Edit the VOICEPIL.INI file in the WINDOWS directory.
	
	3. Delete any lines under the [USER] and [APPS] section headings that did not
	  appear in the directory listings for .VCB and .USR.
	
	4. Save the VOICEPIL.INI file, then run Voice Pilot again.
	
	You will also get the above error message if a user or vocabulary file is
	corrupted.
	
	If a <.VCB> file is corrupted and you get the above error message you can
	continue using Voice Pilot. Voice Pilot will use the DEFAULT vocabulary file
	instead of the corrupted one.
	
	One way to determine which <.VCB> file is corrupted is when you run Voice
	Pilot and the vocabulary that comes up for the application in use is the default
	vocabulary and not your modified or custom made version for that application.
	Voice Pilot will use the DEFAULT vocabulary for any Windows application that
	does not have a custom made vocabulary. There is no way to fix a corrupted
	vocabulary file.
	
	If a <*.USR> file is corrupted you will also get the above error message
	when you run Voice Pilot. You can continue using Voice Pilot since it will
	simply ignore the corrupted <*.USR> file. The corrupted user file will
	still show up as a user in the user list. One way to test for a corrupted user
	file is to try to set it as the active user, if it is corrupted Voice Pilot will
	show the following error message:
	
	  Corrupt voicepil.ini file. Voice Pilot cannot make requested user name
	  active. Please reinstall the Voice Pilot.
	
	To correct the problem you need to remove the corrupted user file either by
	removing the user entry from VOICEPIL.INI or deleting the user from the user
	list in Voice Pilot. There is no way to fix a corrupted user file, you will lose
	all the training for that user. If you have a back up file for that user simply
	replace it to keep the user listed under Voice Pilot.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
