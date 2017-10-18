---
layout: page
title: "Q155373: Compaq Laptops Restart Instead of Powering Down"
permalink: kb/155/Q155373/
---

## Q155373: Compaq Laptops Restart Instead of Powering Down

	Article: Q155373
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Compaq computers do not power down after shutdown after you set the
	registry value
	
	  HKEY_LOCAL_MACHINE\software\Microsoft\WindowsNT\CurrentVersion\winlogon\
	
	  PowerdownAfterShutdown:REG_SZ:1
	
	when you are using the Microsoft HAL. This value enables a Shut Down And Power
	Off option on the Shut Down menu, but if you use this option, the computer
	restarts instead of shutting down.
	
	CAUSE
	=====
	
	This feature does not work correctly with the HAL included with Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To use this feature, you must obtain the HAL that supports this feature from the
	computer's manufacturer.
	
	It comes as part of the power management Softpaq, which you can download from
	Compaq's Web site (http://www.compaq.com).
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
