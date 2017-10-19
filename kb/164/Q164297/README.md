---
layout: page
title: "Q164297: Event 26 Installing IntelliPoint 2.0 in Windows NT 4.0"
permalink: /kb/164/Q164297/
---

## Q164297: Event 26 Installing IntelliPoint 2.0 in Windows NT 4.0

	Article: Q164297
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft IntelliPoint version 2.0 software in Windows NT
	4.0, the event log may show the following error message
	
	  <msfile> Event ID 26 - "The description for Event ID (26) in Source
	  (<msfile>) could not be found. It contains the following insertions
	  string(s):"
	
	where <msfile> is Msbusmou, Mssermou, or Msinport.
	
	CAUSE
	=====
	
	The IntelliPoint software installs these devices and sets them to System
	startup. When Windows NT does not find these devices, it logs an event 26 and
	unload the drivers from memory.
	
	RESOLUTION
	==========
	
	To disable these devices, follow these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click the device mentioned in the event log.
	
	3. Click Startup.
	
	4. Set the Startup Type to Disabled, and then click OK.
	
	5. Close Control Panel and then restart the computer.
	
	Additional query words: prodnt mouse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
