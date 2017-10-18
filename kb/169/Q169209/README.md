---
layout: page
title: "Q169209: Some Mouse Options Not Available When Using IntelliPoint"
permalink: kb/169/Q169209/
---

## Q169209: Some Mouse Options Not Available When Using IntelliPoint

	Article: Q169209
	Product(s): Microsoft Windows NT
	Version(s): 1.0 2.0 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the IntelliPoint 2.0 software for the Microsoft IntelliMouse,
	some options are not available in the mouse configuration tool. Also, if you
	enable the Turn On Wheel option on the Wheel tab, you receive the following
	error message:
	
	  IntelliPoint is unable to change your settings.
	
	  Close any open applications, save any open documents, restart Windows, and
	  then try to change your IntelliPoint settings again.
	
	  If you still have difficulty changing your settings, run IntelliPoint Setup to
	  reinstall the files, and then start IntelliPoint again.
	
	CAUSE
	=====
	
	The IntelliPoint version of the mouse driver is not started.
	
	RESOLUTION
	==========
	
	The IntelliPoint software includes replacements for the following device
	drivers: I8042, Busmou, Inport, and Sermou. The IntelliPoint versions are
	MSi8042, MSbumou, MSinport, and MSsermou.
	
	To enable the IntelliPoint version of the mouse driver, follow these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click the driver that is currently being used for your mouse and set the
	  Startup option to Disabled. For example, if you are using a serial mouse,
	  locate the Sermou driver and set the Startup option to Disabled.
	
	3. Click the IntelliPoint version of the driver and set the Startup option to
	  System.
	
	4. Restart the computer.
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 1.0 2.0 3.51 4.0
	
	=============================================================================
	
