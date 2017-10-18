---
layout: page
title: "Q156259: Wacom Tablet Driver Does Not Unload at System Shutdown"
permalink: kb/156/Q156259/
---

## Q156259: Wacom Tablet Driver Does Not Unload at System Shutdown

	Article: Q156259
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Wacom Tablet with Windows NT 4.0, you may experience any of
	the following symptoms:
	
	- The tablet driver (Wacomkey.exe) does not exit properly when Windows NT shuts
	  down.
	
	- You receive an application error while attempting to open the Wacom tool in
	  Control Panel.
	
	- The event log fills up with overflow messages.
	
	CAUSE
	=====
	
	Older versions of Wacom's tablet drivers can cause these problems, as they are
	not designed to operate with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	Contact Wacom for updated versions of the drivers. The drivers are also
	available on Wacom's Web site at http://www.wacom.com.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
