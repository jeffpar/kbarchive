---
layout: page
title: "Q208820: Print Monitor Does Not Support Bidirectional Printing"
permalink: /kb/208/Q208820/
---

## Q208820: Print Monitor Does Not Support Bidirectional Printing

{% raw %}

	Article: Q208820
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint
	Last Modified: 28-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Hewlett-Packard (HP) 4000 printer driver on a computer
	running Microsoft Windows NT 4.0, print jobs may not be printed, or may persist
	in the print queue for an extended period of time before being printed.
	
	CAUSE
	=====
	
	This problem can be caused by a conflict between the printer driver and print
	monitor status software. HP printer drivers enable bidirectional print support
	by default, but the Hpdcmon.dll file that provides print monitor status does not
	support bidirectional printing.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, disable the bidirectional printing support
	for each HP printer driver installed:
	
	1. Click Start, point to Settings, click Printers, right-click the icon
	  representing the printer to be modified, and then click Properties.
	
	2. Click Ports, click to clear the Enable Bidirectional Support check box, and
	  then click OK.
	
	MORE INFORMATION
	================
	
	You may want to contact Hewlett-Packard Technical Support for further
	information regarding their printer driver software at (888) 321-4272, or visit
	the following Hewlett-Packard Web site:
	
	http://www.hp.com/ghp/services.html
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q141708 Printing to LPD Printer Is Slow or Fails with Windows
	
	  Q255213 Hewlett-Packard HP4000 Print Drivers May Hang the Print Queue
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
