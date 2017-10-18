---
layout: page
title: "Q86423: Unable to Specify Working Directory When Modifying SETUP.INF"
permalink: kb/086/Q86423/
---

## Q86423: Unable to Specify Working Directory When Modifying SETUP.INF

	Article: Q86423
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When modifying the [group#] section of the SETUP.INF file in Windows version
	3.1, it is not possible to modify the working directory property for an
	application.
	
	MORE INFORMATION
	================
	
	The SETUP.INF file can be modified to install a customized version of Windows on
	multiple machines. It is possible to change the default Program Manager groups,
	create other groups, and add applications to these new groups.
	
	The [group#] section of the SETUP.INF (where # is the number of the group) is
	used to list applications that belong in a group. There are entries for
	description, FILENAME.EXE, icon filename, icon n, and profile, but no entry for
	working directory.
	
	The following is an example of the SETUP.INF [group#] section:
	
	[group4]
	"Write",            WRITE.EXE
	"Paintbrush",       PBRUSH.EXE,,,                      pbrush
	"Terminal",         TERMINAL.EXE,,,                    terminal
	"Notepad",          NOTEPAD.EXE,,,                     notepad
	"Recorder",         RECORDER.EXE,,,                    recorder
	"Cardfile",         CARDFILE.EXE,,,                    cardfile
	"Calendar",         CALENDAR.EXE,,,                    calendar
	"Calculator",       CALC.EXE,,,                        calc
	"Clock",            CLOCK.EXE,,,                       clock
	"Object Packager",  PACKAGER.EXE,,,                    packager
	"Character Map",    CHARMAP.EXE,,,                     charmap
	"Media Player",     MPLAYER.EXE,,,                     mplayer
	"Sound Recorder",   SOUNDREC.EXE,,,                    soundrec
	
	REFERENCES
	==========
	
	"Microsoft Windows Resource Kit," version 3.1, pages 110 and 128-133
	
	Additional query words: 3.10 3.11 WRK
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
