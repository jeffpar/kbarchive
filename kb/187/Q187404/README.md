---
layout: page
title: "Q187404: Printer Drivers Setup Makes Server Appear To Be Hung"
permalink: /kb/187/Q187404/
---

## Q187404: Printer Drivers Setup Makes Server Appear To Be Hung

{% raw %}

	Article: Q187404
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	During the GUI portion of the Terminal Server setup, more than 900 printer
	drivers may be installed on the system. It can take a significant amount of time
	for the setup program to compute the set of drivers that must be loaded. This
	can have the affect of making the server appear as if it has locked up.
	
	CAUSE
	=====
	
	The Setup program uses a link list to manage the list of printer drivers in
	memory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
