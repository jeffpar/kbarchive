---
layout: page
title: "Q214441: Access Violation in Spoolss.exe on Windows NT Terminal Server"
permalink: /kb/214/Q214441/
---

## Q214441: Access Violation in Spoolss.exe on Windows NT Terminal Server

{% raw %}

	Article: Q214441
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a non-administrative user with the appropriate permissions attempts to
	change printer properties on Windows NT Server version 4.0, Terminal Server
	Edition, he or she receives an access violation in the spooler (Spoolss.exe).
	
	CAUSE
	=====
	
	For this problem to occur, the user attempting to change the printer settings
	must have been granted full control to the printer, but must not be an
	administrator. This problem is caused when a call is made to the SetPrinter()
	API by any application, the printer properties dialog box is simply one example
	of this problem.
	
	The access violation is caused because a data structure being used by the printer
	API is cleared when it should not be, so subsequent usage of that data structure
	causes an access violation.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
