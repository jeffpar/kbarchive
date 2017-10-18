---
layout: page
title: "Q241840: Improper Shutdown Occurrence Is Reported in Event Viewer"
permalink: kb/241/Q241840/
---

## Q241840: Improper Shutdown Occurrence Is Reported in Event Viewer

	Article: Q241840
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a Windows NT-based computer after it is improperly shut down,
	the following error message may appear in the system log in Event Viewer:
	
	  Event ID: 6008
	  Source: Event Log
	  Description: The previous system shutdown at time on date was unexpected.
	
	CAUSE
	=====
	
	A remote shutdown problem using the InitiateSystemShutdown function was fixed in
	Windows NT 4.0, Terminal Server Edition, Service Pack 4 (SP4). This fix caused
	this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	This fix was created from a similar fix made in Windows NT 4.0. For additional
	information about Winlogon.exe, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236949 Improper Shutdown Occurrence Is Reported in the Event Viewer
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
