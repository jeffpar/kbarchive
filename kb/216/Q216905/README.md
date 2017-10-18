---
layout: page
title: "Q216905: Downlevel Clients Can Cause Excessive Spooler CPU Usage"
permalink: kb/216/Q216905/
---

## Q216905: Downlevel Clients Can Cause Excessive Spooler CPU Usage

	Article: Q216905
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Connecting to a Windows NT print queue from a Microsoft Windows 95 or Windows 98
	client can cause the spooler process (Spoolss.exe) to approach 100 percent CPU
	usage if a large number of print jobs are in the queue. Another possible symptom
	of this issue is that the print queue window on the client may become
	unresponsive. A network trace between the client and the print server shows
	continuous remote procedure call (RPC) traffic as the client repeatedly attempts
	to enumerate the list of print jobs in the queue.
	
	Windows NT clients are unaffected by this issue.
	
	CAUSE
	=====
	
	This problem occurs because the number of print jobs that the downlevel client
	can retrieve exceeded the 64 KB limit.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 win95 win98
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
