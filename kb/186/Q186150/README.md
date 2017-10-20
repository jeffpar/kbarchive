---
layout: page
title: "Q186150: NetBEUI May Hang When Using Arcnet Under Heavy Network Traffic"
permalink: /kb/186/Q186150/
---

## Q186150: NetBEUI May Hang When Using Arcnet Under Heavy Network Traffic

{% raw %}

	Article: Q186150
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using NetBEUI on an Arcnet network, the NetBEUI protocol may stop
	responding (hang) after a period of high network activity occurs. The computer
	has to be restarted to recover from this condition.
	
	CAUSE
	=====
	
	NetBEUI keeps a cache of NDIS packets. This means that NetBEUI can send the same
	packet multiple times. The problem is that NDIS is not clearing out the timeout
	status bit in the packet descriptor. NDIS maintains a counter that runs about
	every two seconds. The first pass of the timer, it will set this timeout status
	on the first packet in the packet queue. The second time the timer runs, it
	checks to see if this bit is set. If it is, NDIS will reset the adapter. Because
	NDIS is not resetting the timeout status, a reset of the adapter could occur.
	There is also a problem with reset recovery that would cause the protocol to
	stop responding.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
