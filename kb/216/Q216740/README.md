---
layout: page
title: "Q216740: Search Drive Mappings Lost When Using NetWare Client"
permalink: kb/216/Q216740/
---

## Q216740: Search Drive Mappings Lost When Using NetWare Client

	Article: Q216740
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The search drive mappings are lost when running the Novell intraNetWare client
	on Windows NT Terminal Server. This problem happens at random, but can usually
	be reproduced after logging on three or four times.
	
	
	CAUSE
	=====
	
	There appears to be a race condition between Winlogon and the GINA. Winlogon may
	sometimes delete a volatile registry key where the GINA logon script process is
	saving information before the process can save the information it wrote to the
	key. If this happens, some or all of the logon script information will be lost.
	
	RESOLUTION
	==========
	
	To work around this problem, use Gateway Services for NetWare (GSNW). Refer to
	the Networking supplement guide that comes with the Windows NT 4.0, Terminal
	Server Edition documentation for instruction on installing GSNW.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0, Terminal Server
	Edition.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
