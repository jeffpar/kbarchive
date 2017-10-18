---
layout: page
title: "Q194830: Unicode Character Display Problem in Full-Screen MS-DOS Session"
permalink: kb/194/Q194830/
---

## Q194830: Unicode Character Display Problem in Full-Screen MS-DOS Session

	Article: Q194830
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	International characters do not display properly in the full-screen display mode
	of an MS-DOS session. International characters are displayed correctly in a
	window.
	
	CAUSE
	=====
	
	When a command prompt is run in a full-screen session, the UNICODE characters
	are not converted to ASCII characters using the ANSI code page loaded at boot
	time.
	
	
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
	Terminal Server Edition Service Pack 6.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
