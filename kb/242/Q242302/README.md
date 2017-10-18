---
layout: page
title: "Q242302: Poor Server Performance with High CPU Usage on Terminal Server"
permalink: kb/242/Q242302/
---

## Q242302: Poor Server Performance with High CPU Usage on Terminal Server

	Article: Q242302
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Poor server performance may occur on computers running Windows NT 4.0, Terminal
	Server Edition that have a large number of concurrent users running Microsoft
	Word, Microsoft Excel, and Microsoft Internet Explorer as well as a large number
	of NetWare printer queues. Symptoms of poor server performance can also be
	observed by running Performance Monitor.
	
	MORE INFORMATION
	================
	
	The CPU utilization and thread counts for the Services.exe and Spoolss.exe
	processes appear higher than normal and their values fluctuate when you view
	them in Performance Monitor. These fluctuating values would suggest that a large
	number of threads are being dynamically created and eliminated.
	
	This type of performance issue has not been observed when the Terminal Server
	computer is configured with only Windows NT-based printer queues.
	
	Creating local printer queues that send print jobs to the NetWare printer queues
	through a UNC path can significantly reduce processor usage. To create a local
	printer that sends print jobs to a NetWare printer queue:
	
	1. Click on the Start, point to Settings, click Printer, and then double-click
	  Add Printer.
	
	2. In the Add Printer Wizard, click My Computer, and then click Next.
	
	3. Click Add Port.
	
	4. In the Printer Ports dialog box, click Local Port, and then click New Port.
	
	5. In the Port Name dialog box, type a UNC path representing the NetWare printer
	  queue. For example, \\Nw312\Myqueue.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	
