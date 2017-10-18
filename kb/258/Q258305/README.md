---
layout: page
title: "Q258305: Print Server Scalability Limit Due to Synchronization Contention"
permalink: kb/258/Q258305/
---

## Q258305: Print Server Scalability Limit Due to Synchronization Contention

	Article: Q258305
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a print server with many clients, print jobs, and installed
	printers, clients may begin receiving "RPC server too busy" or "RPC server
	unavailable" error messages as the load on the print server increases. When this
	occurs, the server's network throughput drops and the number of threads in the
	Spoolss process increases to well over 200.
	
	When the server is in this state, restarting the Spooler service may help. If it
	does not help, you need to reboot the server.
	
	After you reboot the server, the problem may reoccur within hours. There is no
	evident memory leak or bottleneck in performance data.
	
	
	CAUSE
	=====
	
	The Spooler service may be running into a contention or a deadlock caused by the
	high load.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
