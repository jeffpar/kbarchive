---
layout: page
title: "Q214452: STOP 0x1E in Win32k.sys When Running Solomon v2.06 (Accounting)"
permalink: /kb/214/Q214452/
---

## Q214452: STOP 0x1E in Win32k.sys When Running Solomon v2.06 (Accounting)

{% raw %}

	Article: Q214452
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience a STOP 0x1E blue screen STOP error message in Windows NT,
	Terminal Server Edition when you do the following in Solomon Accounting version
	2.06:
	
	1. Open two or more Windows Terminal Server Client sessions.
	
	2. Launch client sessions for Solomon.
	
	3. Minimize the client window, resize or maximize, or disconnect a session.
	
	CAUSE
	=====
	
	There is a condition where the current desktop pointer can be set to a NULL
	value and is then de-referenced: (pti->rpdesk == NULL).
	
	
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
	
	Additional query words: 4.00 wts tse stop 0x50
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
