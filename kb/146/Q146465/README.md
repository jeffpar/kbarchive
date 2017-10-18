---
layout: page
title: "Q146465: Err Msg: Setup Cannot Run In a 386 Enhanced Mode Windows..."
permalink: kb/146/Q146465/
---

## Q146465: Err Msg: Setup Cannot Run In a 386 Enhanced Mode Windows...

	Article: Q146465
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT 3.51 on a Windows 95 computer with the
	"WINNT /B/W" (without quotes) command, the following error message appears:
	
	  Setup cannot run in a 386 Enhanced Mode Windows MS-DOS Command Prompt.
	  Exit Windows and run Setup again.
	  Setup cannot continue. Press ENTER to exit.
	
	CAUSE
	=====
	
	This problem occurs if there is no space between the /B and /W switches for
	WINNT.EXE.
	
	RESOLUTION
	==========
	
	To correct this problem, type the following at the command line:
	
	  WINNT /B /W
	
	MORE INFORMATION
	================
	
	The /W switch allows WINNT.EXE to run in Windows 95. You can use this switch
	with other WINNT.EXE switches. For example, if you want to create boot floppy
	disks for CD-ROM or floppy-based Windows NT installation, you can type the
	following at the command line:
	
	  WINNT /OX /W
	
	"WINNT /W" allows you to install Windows NT from within Windows, bypassing the
	drive locking and enhanced driver issues involved with a Microsoft Windows
	install. Again, this bypasses many of the Windows NT install safety features and
	is not recommended.
	
	When you type "WINNT /?" (without the quotation marks) at the command line, the
	/W switch is not listed. For more information on the /W switch, please see
	SETUP.TXT on the Windows NT Server or Workstation 3.51 compact disc.
	
	For more information, regarding the /w switch and Windows NT 4.0 please refer to
	the following article in the Microsoft Knowledge Base:
	
	  Q147012 Activating /W Switch to Prevent Rebooting in WinNT
	
	Additional query words: prodnt win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51
	
	=============================================================================
	
