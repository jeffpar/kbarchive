---
layout: page
title: "Q159492: PC Card Device Not Enumerated When Reinserted"
permalink: kb/159/Q159492/
---

## Q159492: PC Card Device Not Enumerated When Reinserted

	Article: Q159492
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a PC Card device is removed from and then reinserted into a CardBus socket,
	the device may not be enumerated upon reinsertion. The PC Card icon on the
	taskbar shows a status of Empty.
	
	CAUSE
	=====
	
	The signal on certain CardBus status lines may be unstable for a time when a
	device is removed and reinserted. The Windows 95 drivers may read an incorrect
	status during this period of signal instability, and not detect the correct
	status of the device.
	
	RESOLUTION
	==========
	
	The reinserted device can be enumerated by clicking Refresh in Device Manager.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 95 toshiba tecra pcmcia
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
