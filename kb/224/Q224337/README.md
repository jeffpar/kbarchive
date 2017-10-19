---
layout: page
title: "Q224337: Errors Noted in Event Viewer After Installing Wacom Tablet"
permalink: /kb/224/Q224337/
---

## Q224337: Errors Noted in Event Viewer After Installing Wacom Tablet

	Article: Q224337
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbtool kbui kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Wacom Tablet and driver for Windows NT 4.0, the following
	system events are logged in the Event Viewer when you start your computer:
	
	- Event ID: 22
	  Source: Serial
	  A conflict has been detected between two drivers which claimed two overlapping
	  IO port regions. Driver Serial, with device
	  <\Device\Serial0.Translated>, claimed an IO port range with starting
	  address in data address 0x28 and 0x2c, and length in data address 0x30.
	
	- Event ID: 22
	  Source: Serial
	  A conflict has been detected between two drivers which claimed two overlapping
	  IO port regions. Driver Wacom, with device
	  <\Device\PenPort0.Translated>, claimed an IO port range with starting
	  address in data address 0x28 and 0x2c, and length in data address 0x30.
	
	- Event ID: 11
	  Source: Serial
	  The hardware resources for COMx are already in use by another device.
	
	NOTE: You may want to configure Event Viewer to "Overwrite events as needed" in
	the Log Settings to avoid clearing your events repeatedly.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Wacom to inquire about the availability of a fix
	for this issue.
	
	To work around this issue, you can safely ignore these error messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbtool kbui kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
