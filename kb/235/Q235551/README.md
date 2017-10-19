---
layout: page
title: "Q235551: Exiting Full-Screen DOS Session Hangs ICA Session"
permalink: /kb/235/Q235551/
---

## Q235551: Exiting Full-Screen DOS Session Hangs ICA Session

	Article: Q235551
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "exit" (without the quotation marks) from a full-screen DOS window
	in an ICA session to a Terminal Server computer, the ICA session stops
	responding (hangs). This behavior occurs after you apply Windows NT 4.0 Service
	Pack 4 (SP4) to the Terminal Server computer.
	
	CAUSE
	=====
	
	This problem occurs because a change in the console window handler in SP4 did
	not handle the switch from text to graphics mode properly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0 Service
	Pack 4, Terminal Server Edition. This problem was first corrected in Windows NT
	Server 4.0, Terminal Server Edition, Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
