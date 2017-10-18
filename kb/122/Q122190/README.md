---
layout: page
title: "Q122190: Steps To Remove Golf 2.0 From Your Computer"
permalink: kb/122/Q122190/
---

## Q122190: Steps To Remove Golf 2.0 From Your Computer

	Article: Q122190
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is an outline of files, directories, and entries that will allow
	you to remove all information Golf 2.0 installs into your computer under the
	Windows 3.1 environment.
	
	WARNING: Some files that Golf 2.0 installs in the WINDOWS, WINDOWS\SYSTEM and
	WINDOWS\WIN32S directories are used by other applications. Removing these files
	can cause Windows applications and the Windows environment to not operate
	properly. Extreme care should be taken when deleting these files to ensure the
	continued functionality of Windows applications and the Windows environment.
	
	MORE INFORMATION
	================
	
	Follow these steps to completely remove Golf 2.0 from your system:
	
	In the WINDOWS directory, delete:
	
	  MSGOLF.INI
	  WAVEMIX.INI
	
	In the WINDOWS\SYSTEM directory, delete:
	
	  WIN32S.INI
	  OLECLI.DLL
	  WAVMIX32.DLL
	  W32SYS.DLL
	  WIN32S16.DLL
	  WINMM16.DLL
	
	Delete the entire WINDOWS\SYSTEM\WIN32S directory.
	
	Delete the entire MSGOLF2 directory.
	
	Make the following modifications to SYSTEM.INI:
	
	- Under the [boot] section remove WINMM16.DLL from the drivers= line
	
	- Under the [386Enh] section, remove the line:
	
	  device=C:\WINDOWS\SYSTEM\WIN32S\W32S.386
	
	Make the following modification to WIN.INI:
	
	- Remove the [MSGolf] section.
	
	Additional query words: 2.00 golf2 w_golf uninstall un-install deinstall de-install delete
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbGamesSearch kbGolfSearch kbGolf200
	Version           : WINDOWS:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
