---
layout: page
title: "Q94201: TopDesk Conflicts with SoundBits Sound Events"
permalink: kb/094/Q94201/
---

## Q94201: TopDesk Conflicts with SoundBits Sound Events

	Article: Q94201
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TopDesk program included with the Windows Resource Kit for Windows version
	3.1 prevents many of the Sound Events included with Microsoft SoundBits from
	functioning correctly. Closing TopDesk allows all of the Sound Events to operate
	normally.
	
	MORE INFORMATION
	================
	
	Microsoft SoundBits includes a Sound Events "hook," which allows Windows' users
	to attach sounds to specific system events, such as minimizing and maximizing
	Windows, opening and closing applications, and starting and exiting Windows.
	Under normal circumstances, this "hook" plays whatever sound is assigned to a
	system event when that event occurs.
	
	If TopDesk is running, however, sounds will not play when certain system events
	occur. Among the Sound Events that DO NOT function with TopDesk are the
	following:
	
	  Application Maximize
	  Application Minimize
	  Application Open
	  Application Restore Down
	  Application Restore Up
	  Control Panel Minimize
	  Control Panel Open
	  Control Panel Restore Up
	  File Manager Minimize
	  File Manager Open
	  File Manager Restore Up
	  MBrowser Minimize
	  MBrowser Open
	  MBrowser Restore Up
	  Program Manager Minimize
	  Program Manager Restore Up
	  Sound Recorder Open
	  WinHelp Minimize
	  WinHelp Open
	  WinHelp Restore Up
	
	The only way to allow these Sound Events to operate correctly is to close
	TopDesk.
	
	Additional query words: 3.10 WRK Hanna Barbera classic cartoons sound clip edition
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
