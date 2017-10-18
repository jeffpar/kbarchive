---
layout: page
title: "Q171996: Winsock Function Calls Generate Non-Paged Pool Memory Leak"
permalink: kb/171/Q171996/
---

## Q171996: Winsock Function Calls Generate Non-Paged Pool Memory Leak

	Article: Q171996
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Winsock function calls are called in a tight loop such that a client
	application communicates with a local server executing a call sequence similar
	to
	
	  socket, setsockopt, connection, send, closesocket
	
	a nonpaged pool memory leak may occur.
	
	CAUSE
	=====
	
	Because the internal I/O-completion APC routines did not get a chance to run,
	the result was a non-paged pool memory leak.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbui kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
