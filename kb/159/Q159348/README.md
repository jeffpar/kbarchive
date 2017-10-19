---
layout: page
title: "Q159348: No Windows 95 Support for Zoomed Video Devices"
permalink: /kb/159/Q159348/
---

## Q159348: No Windows 95 Support for Zoomed Video Devices

	Article: Q159348
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Zoomed Video (ZV) PC Card with Windows 95, the card is not
	recognized correctly.
	
	In Microsoft Windows 95 OEM Service Release version 2 (OSR2), ZV PC Card devices
	are recognized, but are not configured. The driver is loaded, but is never asked
	to start. Device Manager indicates that the device has a problem with a Code 7.
	
	CAUSE
	=====
	
	Windows 95 and OSR2 do not include support for Zoomed Video.
	
	Most of the support to enable a ZV PC Card was added to OSR2, but was not enabled
	when OSR2 was shipped. As a result, the logical configurations for these devices
	get filtered out and the device cannot be started.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
