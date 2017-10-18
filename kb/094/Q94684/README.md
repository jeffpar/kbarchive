---
layout: page
title: "Q94684: Swap File Settings Change when Changing 32-Bit Disk Access"
permalink: kb/094/Q94684/
---

## Q94684: Swap File Settings Change when Changing 32-Bit Disk Access

	Article: Q94684
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to only change the 32-Bit Disk Access entry in the 386 Enhanced
	section of the Control Panel, it may be necessary to reset the settings for the
	swap file size and type.
	
	MORE INFORMATION
	================
	
	When editing the virtual memory settings to change the 32-Bit Disk Access entry,
	the virtual memory settings may also change.
	
	If you want to retain the previous settings, you must enter the virtual memory
	settings as well as change the setting for the 32-Bit Disk Access entry. Once
	all settings are changed, choose OK. Accept the changes and restart Windows when
	the selection appears.
	
	WORKAROUND
	==========
	
	To prevent the virtual memory settings from changing, you may also change the
	32-Bit Disk Access setting from outside of the Control Panel.
	
	To do this:
	
	1. Edit the SYSTEM.INI file and add the following line to the [386ENH] section:
	
	  32BitDiskAccess= (ON or OFF)
	
	2. Restart Windows.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
