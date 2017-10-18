---
layout: page
title: "Q189403: Page Fault Error Message in Uhcd.sys Docking or Undocking Laptop"
permalink: kb/189/Q189403/
---

## Q189403: Page Fault Error Message in Uhcd.sys Docking or Undocking Laptop

	Article: Q189403
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw win95 kbHardwarekbfixlist
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dock or undock your Windows 95 OEM Service Release version
	2.5-based laptop computer, you may receive a page fault error message in
	Uhcd.sys.
	
	CAUSE
	=====
	
	This problem can occur if a system resource on your computer is used after it is
	de-referenced.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and OSR2:
	
	  Uhcd.sys  version 4.03.1214  dated 07/01/98 12:14pm  40,480 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release 2 (OSR2). This problem no longer occurs in Windows 98. To resolve this
	problem, install the current version of Windows. For information about the
	current version of Windows, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	Additional query words: 95 2.50
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25
	Version           : :2.5
	Issue type        : kbprb
	
	=============================================================================
	
