---
layout: page
title: "Q172195: Service Control Manager Reports Error But No Event ID Is Listed"
permalink: kb/172/Q172195/
---

## Q172195: Service Control Manager Reports Error But No Event ID Is Listed

	Article: Q172195
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS NT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT 4.0, you may receive the following error message:
	
	  At Least One Service or Driver Failed During System Startup. Use Event Viewer
	  to Examine the Event Log for Details.
	
	When you check Event Viewer, there are no error messages.
	
	CAUSE
	=====
	
	This behavior can occur if a driver does not start correctly but does not report
	errors to the Event Log service.
	
	One driver that exhibits this behavior is the UMAX scanner driver (UMAXDRV). If
	the scanner is turned off, the driver does not load, which causes the error
	message. However, the driver does not report the failure to the Event Log
	service.
	
	RESOLUTION
	==========
	
	Either resolve the issue that caused the driver not to load successfully (for
	example, turn on the scanner before booting) or disable the driver by following
	these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click the driver, and then click Startup.
	
	3. Click Disabled, and then click OK.
	
	4. Click Close.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINDOWS NT:4.0
	
	=============================================================================
	
