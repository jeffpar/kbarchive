---
layout: page
title: "Q123742: Troubleshooting &quot;The Dependency Service or Group...&quot; Errors"
permalink: /kb/123/Q123742/
---

## Q123742: Troubleshooting &quot;The Dependency Service or Group...&quot; Errors

	Article: Q123742
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbtshoot
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When you run Windows NT Setup, the following error message appears:
	
	  The dependency service or group failed to start. This error prevented the
	  network from starting.
	
	This error can be caused by:
	
	- An IRQ conflict involving a network interface card (NIC).
	
	- An I/O port address conflict involving a NIC.
	
	- A NIC that is not on the hardware compatibility list (HCL).
	
	- A corrupt NIC driver.
	
	- A failing or broken NIC.
	
	- An incorrect pairing of the NIC and NIC driver.
	
	
	Additional query words: adapter 3.10 prodnt
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Issue type        : kbprb
	
	=============================================================================
	
