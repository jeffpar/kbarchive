---
layout: page
title: "Q245010: Print Jobs Sent from LPR Print Server Are Not Printed"
permalink: /kb/245/Q245010/
---

## Q245010: Print Jobs Sent from LPR Print Server Are Not Printed

	Article: Q245010
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbtool
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer running Microsoft Windows NT Server 4.0 Service Pack 3
	as a line printing utility (LPR) print server, print jobs that you send using
	the LPR print server may all appear as zero-byte print jobs in the print queue.
	When this occurs, the print jobs may not be printed. However, the print server
	correctly handles print jobs you send from client computers.
	
	CAUSE
	=====
	
	This behavior can occur if you use Seagate Backup Exec version 7.0.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Seagate to inquire about the availability of a
	fix for this issue.
	
	To work around this issue, disable Seagate Backup Exec version 7.0. For
	information about how to disable Seagate Backup Exec version 7.0, view the
	documentation included with Seagate Backup Exec version 7.0, or contact Seagate.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
