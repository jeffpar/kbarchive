---
layout: page
title: "Q138340: Trouble Quitting Program Started with AT.EXE Scheduler"
permalink: /kb/138/Q138340/
---

## Q138340: Trouble Quitting Program Started with AT.EXE Scheduler

	Article: Q138340
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start a non-interactive application with the AT.EXE scheduler program,
	one or more of the following symptoms occur:
	
	- The application appears to hang.
	
	- The application remains loaded in memory even though it should quit.
	
	- You are unable to quit the application.
	
	- You can see the process with Process Viewer but Process Viewer is unable to
	  kill it.
	
	- If the application is trying to access a device, for example a tape drive,
	  you cannot access the device until the application is cleared from memory.
	
	- Memory is not freed if the application fails, and if different applications
	  are hung in memory, system performance degrades.
	
	- Some applications allow multiple instances; and if they do not clear from
	  memory, performance degrades.
	
	NOTE: Applications you start with the AT.EXE command, by design, do not appear in
	Task Manager.
	
	RESOLUTION
	==========
	
	To remove the non-interactive application from memory after it does not quit, do
	one of the following:
	
	- Reboot your computer.
	
	  -or-
	
	- Use the Windows NT Resource Kit utilities TLIST.EXE and KILL.EXE. These
	  utilities allow the administrator to detect and then clear the application
	  from memory based on the application Process ID.
	
	Tlist.exe and Kill.exe utilities are available in the Windows NT Resource Kit
	versions 3.1, 3.5, and 3.51. Help for both utilities is available from the
	command line. (For a hung process use the Kill -f Option.)
	
	NOTE: AT Scheduler has no way to control an application already started.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
