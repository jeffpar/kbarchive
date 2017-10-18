---
layout: page
title: "Q195333: Terminal Server Error 0x0a on SMP Computer"
permalink: kb/195/Q195333/
---

## Q195333: Terminal Server Error 0x0a on SMP Computer

	Article: Q195333
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
	
	Under high load, Windows NT Terminal Server Edition may stop with a STOP code of
	0x0000000A on SMP computers. The problem happens while a user logs off, but
	because the problem only happens when there are more than 25 users, it is not so
	easy to relate it to this event.
	
	CAUSE
	=====
	
	This problem occurs because, when logging off, USER is still processing messages
	for the user's window station although the user is logging off and the thread
	handling the message is already gone.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
