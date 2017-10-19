---
layout: page
title: "Q163013: Error &quot;The Plug and Play Service Is Not Available&quot;"
permalink: /kb/163/Q163013/
---

## Q163013: Error &quot;The Plug and Play Service Is Not Available&quot;

	Article: Q163013
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to start Control Panel Devices may result in the following error:
	
	  Configuration Manager: The Plug and Play service is not available.
	
	CAUSE
	=====
	
	This error occurs if the Plug and Play service in Control Panel Services is set
	to Manual Startup.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Open Control Panel Services.
	
	2. Select the Plug and Play service and click Start.
	
	To prevent the error from occurring in the future, do the following:
	
	1. Open Control Panel Services.
	
	2. Select the Plug and Play service and click Startup.
	
	3. Click to select the Automatic option in the Startup Type section.
	
	MORE INFORMATION
	================
	
	Additional symptoms you may see when the Plug and Play service is not started
	include missing the appropriate driver descriptions under the SCSI Adapters
	Control Panel tool and the following error message when you access the Drivers
	tab in the SCSI Adapters tool:
	
	  Error occurred getting driver list from inf file. Err=0
	
	Additional query words: P&P applet pp pnp
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
