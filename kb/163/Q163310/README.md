---
layout: page
title: "Q163310: SNA Server Application Exception If Invalid Handle"
permalink: kb/163/Q163310/
---

## Q163310: SNA Server Application Exception If Invalid Handle

	Article: Q163310
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An access violation may occur when you run SNA Server 2.11 or 2.11 SP1 on
	Windows NT 3.51 or 4.0, if the Windows NT "global flags" entry is enabled to
	check for "invalid handle exceptions."
	
	This problem is only observed in special debugging environments where "invalid
	handle exceptions" have been enabled by a Windows NT support engineer.
	
	CAUSE
	=====
	
	A service handle returned either by OpenSCManager() or OpenService() function
	must be closed with CloseServiceHandle() NOT with CloseHandle(). Calling
	CloseHandle will generate an exception if "invalid handle exceptions" are
	enabled.
	
	RESOLUTION
	==========
	
	Close all service handles with the CloseServiceHandle() call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	
	=============================================================================
	
