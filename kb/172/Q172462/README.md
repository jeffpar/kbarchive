---
layout: page
title: "Q172462: RPC Failure on Heavily Loaded Print Server"
permalink: /kb/172/Q172462/
---

## Q172462: RPC Failure on Heavily Loaded Print Server

	Article: Q172462
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows NT print servers with more than 40 printers running simultaneously
	(independent of the number configured on the system), RPC failures may occur. A
	client may receive the following RPC errors and may fail to connect to the
	server; the event log may also report RPC errors. Opening the Control Panel or
	Print Manager may show one or more of the following error messages:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	  Error 1722: The RPC server is unavailable.
	
	  Error 1721: Not enough resources are available to complete this operation.
	
	  Error 1727: The remote procedure call failed and did not execute
	
	CAUSE
	=====
	
	This problem occurs because the spooler loses track of table entries assigned to
	each thread when the thread count goes above forty.
	
	RESOLUTION
	==========
	
	An updated Spoolss.exe is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: fpnw lpd lpr
	
	======================================================================
	Keywords          : kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
