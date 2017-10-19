---
layout: page
title: "Q224824: Error Messsage: STOP 0xA in SYMC810.SYS"
permalink: /kb/224/Q224824/
---

## Q224824: Error Messsage: STOP 0xA in SYMC810.SYS

	Article: Q224824
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Service Pack 4 (SP4), you may receive the following
	error message on a blue screen:
	
	  Stop 0x0000000A (0x00000028, 0x00000004,0x00000001, 0x8001AB9C) in
	  symc810.sys
	
	CAUSE
	=====
	
	This issue can occur if you are using the Symbios Symc810.sys SCSI miniport
	driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install the most current driver from Symbios.
	
	NOTE: The new driver may have a different file name.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
