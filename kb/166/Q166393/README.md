---
layout: page
title: "Q166393: Windows NT May Hang or Show &quot;Stop 0x1E&quot; Error with Iomega Drive"
permalink: /kb/166/Q166393/
---

## Q166393: Windows NT May Hang or Show &quot;Stop 0x1E&quot; Error with Iomega Drive

{% raw %}

	Article: Q166393
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Iomega Parallel Port Zip Drive drivers version 1.41,
	Windows NT may hang or display a "STOP 0x1E" error message at startup.
	
	CAUSE
	=====
	
	The drive is not connected to the parallel port.
	
	RESOLUTION
	==========
	
	To correct this behavior, use one of the following methods.
	
	Method 1
	--------
	
	1. In Control Panel, double-click Devices.
	
	2. In the list of devices, click PPA3NT.
	
	3. Click Startup, and then set the device to Manual. Manually start the PPA3NT
	  device by repeating steps 1-2 and clicking Start to load the driver when the
	  drive is connected.
	
	Method 2
	--------
	
	1. In Control Panel, double-click Devices.
	
	2. In the list of devices, click PPA3NT.
	
	3. Click Startup and then set the device to Disabled. When the drive is
	  connected, set the device to Boot.
	
	Method 3
	--------
	
	Contact the manufacturer for a possible updated driver.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
