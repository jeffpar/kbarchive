---
layout: page
title: "Q154528: How to Change or Disable the Screen Saver Used at Logon"
permalink: kb/154/Q154528/
---

## Q154528: How to Change or Disable the Screen Saver Used at Logon

	Article: Q154528
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The screen saver used at the logon screen before pressing CTRL+ALT+DELETE is the
	Logon Screen Saver. If you want to disable or change the screen saver used, you
	must do so through the registry editor.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Run Regedt32.exe
	
	2. Go to the following registry location:
	
	    HKEY_USERS\Default\Control Panel\Desktop
	
	  To disable the screen saver:
	
	     Change the Value of Scrnsave.exe to(None)
	        Example: (Scrnsave.exe:REG_SZ:(None))
	     Change the value of ScreenSaveActive to Zero
	        Example: (ScreenSaveActive:REG_SZ:0)
	
	  To Change the default screen saver used:
	
	     Change the Value to the screen saver file (*.scr).
	        Example: (Scrnsave.exe:REG_SZ:Logon.scr)
	     Change the value of ScreenSaveActive to 1
	        Example: (ScreenSaveActive:REG_SZ:1)
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
