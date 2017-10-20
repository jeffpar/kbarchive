---
layout: page
title: "Q248703: Multiple Separator Pages with Win95 Client and NT4 Print Server"
permalink: /kb/248/Q248703/
---

## Q248703: Multiple Separator Pages with Win95 Client and NT4 Print Server

{% raw %}

	Article: Q248703
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Microsoft Windows 95-based client computer to a Microsoft
	Windows NT 4.0-based print server, multiple separator pages may show up in the
	queue and in the print output, although neither the client nor the server is
	configured to use extra separator pages.
	
	CAUSE
	=====
	
	This behavior can occur when you run McAfee VirusScan 95 version 2.x on the
	Windows 95-based client.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade the Windows 95-based client to McAfee VirusScan
	95 version 3.0 or later. To work around this behavior, disable use of separator
	pages on both the client and the print server.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
