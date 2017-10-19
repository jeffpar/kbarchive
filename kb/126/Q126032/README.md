---
layout: page
title: "Q126032: Badly-behaved 16-bit Application Prevents System Shutdown"
permalink: /kb/126/Q126032/
---

## Q126032: Badly-behaved 16-bit Application Prevents System Shutdown

	Article: Q126032
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A badly-behaved 16-bit application may prevent Windows NT from shutting down
	cleanly. Once the application misbehaves and you attempt to shut down Windows
	NT, the shutdown may halt or hang, and it may be necessary to physically turn
	off the power to the computer to regain use of Windows NT.
	
	After requesting a shutdown, a dialog box with the application's name in the
	title bar appears stating that the Windows application cannot respond to the end
	task request. The dialog box presents three choices: Wait, End Task, and
	Cancel.
	
	If you choose End Task, after a period of time, a similar dialog appears with
	WOWEXEC in the title bar.
	
	If you select End Task again, the shutdown will never complete, and at this point
	your computer is unusable:
	
	- CTRL+ALT+DEL has no effect.
	
	- CTRL+ESC has no effect.
	
	- ALT+TAB task switching still works, but is not useful.
	
	The choices available with ALT+TAB at this stage will probably be limited to the
	bad application and Program Manager. The bad application is still hanging. If
	you attempt to run other applications from Program Manager, they may fail to
	start with or without reporting errors. The following errors may appear:
	
	  DLL INITIALIZATION FAILED
	  D:\winnt35\system32\comctl32.dll failed
	  The process is terminating abnormally.
	
	  -OR-
	
	  DLL INITIALIZATION FAILED
	  D:\winnt35\system32\kernel32.dll failed
	  The process is terminating abnormally.
	
	At this stage it is necessary to turn off your computer.
	
	
	WORKAROUND
	==========
	
	Run the 16-bit application in its own memory space. This may enable a clean
	shutdown to take place when the application misbehaves, but may not be a
	suitable workaround if installed memory is limited on the computer experiencing
	the problem. For more experienced users, you can suggest using PVIEWER.EXE from
	the Windows NT Resource Kit to perform a Kill Process on the associated NTVDM
	when the application misbehaves. This should succeed in removing the bad
	application, but it will also forcibly terminate all other applications running
	in the same VDM.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
