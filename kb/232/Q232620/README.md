---
layout: page
title: "Q232620: Spooled Print Jobs Are Deleted from Queue Without Being Printed"
permalink: /kb/232/Q232620/
---

## Q232620: Spooled Print Jobs Are Deleted from Queue Without Being Printed

	Article: Q232620
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
	
	When you run Quota Server from Northern Technologies on a print server, print
	jobs are successfully spooled, then deleted from the queue, but are never
	printed.
	
	When you use Perfmon.exe to observe Paged Pool bytes for the Spoolss.exe process,
	a continual increase over time and a sharp decrease during the same period of
	time that print jobs are reportedly lost is displayed. During this same time
	period, the Quota Server service (Qsserver.exe), may display CPU usage at 70
	percent or higher.
	
	RESOLUTION
	==========
	
	To resolve this problem, please contact Northern Technologies software support
	for an update of Quota Server for Windows NT.
	
	  http://www.northern.se/
	
	You can also contact Northern Technologies through e-mail at support@northern.se.
	
	STATUS
	======
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	These symptoms may occur on systems running Quota Server version 4.6A and
	earlier from Northern Technologies.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
