---
layout: page
title: "Q159909: STOP 0x0000000A May Occur on Multiprocessor Systems"
permalink: /kb/159/Q159909/
---

## Q159909: STOP 0x0000000A May Occur on Multiprocessor Systems

{% raw %}

	Article: Q159909
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the normal operation of a multiprocessor system, it is possible that that
	Windows NT may produce a STOP 0x0000000A error.
	
	On your computer running Windows NT Server, the following stop error message is
	displayed:
	
	  STOP 0x0000000A (0xFE5AB000, 0x00000002, 0x00000001, 0x8013D41A)
	
	Note: The first parameter may vary, but the last three should always be the same
	on a multiprocessor system.
	
	CAUSE
	=====
	
	When the system is performing a fast call interlock operation in the nonpaged
	data segment on a multiprocessor system, it is possible that Windows NT will
	stop with a STOP 0x0000000A error as the result. This error happens during the
	removal of an entry from the front of a singly linked list. It is possible that
	a second processor will change the link list head while the other processor is
	using it.
	
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
	
	
	
	Additional query words: trap 0xA multi-processor
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
