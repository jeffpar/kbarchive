---
layout: page
title: "Q252663: WritePrinter() API Call Does Not Work Printin to an LPR Printer"
permalink: /kb/252/Q252663/
---

## Q252663: WritePrinter() API Call Does Not Work Printin to an LPR Printer

{% raw %}

	Article: Q252663
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print to an LPR printer, the WritePrinter() application
	programming interface (API) may not work when the program you are using calls
	the API. The GetLastError() API may return the following error message:
	
	  ERROR_INSUFFICIENT_BUFFER
	
	CAUSE
	=====
	
	This issue can occur if the status of the print job changes between the time the
	WritePrinter() API requests the size needed for the status and the time the
	WritePrinter() API requests the status from the spooler.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the printer settings from the "Start print
	immediately" option to the "Start printing after the last page is spooled"
	option.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
