---
layout: page
title: "Q246801: STOP 0x0000000a Error with Windows NT Server 4.0 SP4 and OFM 5.1"
permalink: kb/246/Q246801/
---

## Q246801: STOP 0x0000000a Error with Windows NT Server 4.0 SP4 and OFM 5.1

	Article: Q246801
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a computer running Microsoft Windows NT Server 4.0 (Service Pack
	4) with St. Bernard Software's Open File Manager utility, version 5.1, you may
	receive a STOP 0x0000000A error message when the Ofmntdrv.sys file does not run
	during a scheduled backup. If you restart and log on to the computer, you may
	receive the same error message while services are still loading.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To work around this behavior, stop all third-party services, and then restart
	the computer. Restart the third-party services one at a time, restarting the
	computer after each, until you identify the problem service.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: blue screen crash lock
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
