---
layout: page
title: "Q169026: Virtual Motion RAS Manager in 4.0 Reskit May Cause Event 4001"
permalink: /kb/169/Q169026/
---

## Q169026: Virtual Motion RAS Manager in 4.0 Reskit May Cause Event 4001

{% raw %}

	Article: Q169026
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install the trial version of the Remote Access Service (RAS) Manager
	by Virtual Motion, included in the "Windows NT 4.0 Server Resource Kit," the
	following error may appear in the event log:
	
	  Event ID 4001 - Service initialization error. Component: CPortMgr::Init
	  Unable to locate PDC for RAS server, Error code: 2453
	
	CAUSE
	=====
	
	When RAS Manager is installed on a workgroup member server that is not
	participating in a domain, the Event ID 4001 error may appear. This problem
	occurs with the version of software that shipped with "Windows NT 4.0 Server
	Resource Kit."
	
	RESOLUTION
	==========
	
	Download the latest trial version of RAS Manager from Virtual Motion's Web site
	at: http://www.virtualmotion.com. Other problems that arise from use of RAS
	Manager may be fixed by upgrading to the latest version as well.
	
	MORE INFORMATION
	================
	
	Remote Access Manager is manufactured by Virtual Motion, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
