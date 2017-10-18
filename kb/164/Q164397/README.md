---
layout: page
title: "Q164397: Stop 0x0000000A in TCP/IP Due to AFD Sending Invalid MDL"
permalink: kb/164/Q164397/
---

## Q164397: Stop 0x0000000A in TCP/IP Due to AFD Sending Invalid MDL

	Article: Q164397
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT may get a Blue Screen with a STOP 0x0000000a error
	in Tcpip.sys.
	
	CAUSE
	=====
	
	The MDL size of Afd.sys was one byte less than the actual send size.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt 0xa
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
