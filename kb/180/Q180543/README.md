---
layout: page
title: "Q180543: Event 9503: NwlnkNB Parameter Export was Illegal"
permalink: /kb/180/Q180543/
---

## Q180543: Event 9503: NwlnkNB Parameter Export was Illegal

{% raw %}

	Article: Q180543
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT may log the following event when trying to load NwlnkNB:
	
	  EventID: 9503
	  Source:  NwlnkNB
	  Type:    Warning
	
	  Description:
	  The value for the NwlnkNB parameter Export was illegal.
	
	  Data:
	
	  0000: 0000ffff 00540003 00000000 8000251f
	  0010: 000002be 00000000 ffffffff 00000000
	  0020: 00000000 00000000
	
	
	CAUSE
	=====
	
	Service Control Manager tries to load the NwLnkNb driver every 30 minutes. If
	all the bindings associated with NwlnkNB are disabled, the driver does not load.
	Because the export key in the bindings for this driver is NULL, the driver logs
	event 9503: reporting an illegal configuration.
	
	RESOLUTION
	==========
	
	There is no reason to load the driver if all the bindings associated with the
	driver are disabled.
	
	Follow these steps to disable the driver from loading:
	
	1. Click the Start button, point to Settings, click Control Panel and then
	  double-click the Devices icon.
	
	2. Click NWLink NetBIOS, click Startup, and then click Disabled. For Startup
	  Type, select Disabled and click OK.
	
	3. Shut down and restart your computer running Windows NT.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
