---
layout: page
title: "Q173881: STOP 0x0000000A in Netbt.sys on a Multiprocessor Computer"
permalink: /kb/173/Q173881/
---

## Q173881: STOP 0x0000000A in Netbt.sys on a Multiprocessor Computer

{% raw %}

	Article: Q173881
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
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
	
	The following Blue Screen may occur intermittently on a multiprocessor
	computer.
	
	  STOP 0x0000000A (0x00000014, 0x00000002, 0x00000000, 0xf5a178ce)
	  IRQL_NOT_LESS_OR_EQUAL
	  Address f5a178ce has base at f5a10000 - NETBT.SYS
	
	NOTE: The first and second parameter will always be identical to the above
	mentioned. The fourth parameter can be different. The Stop message reports the
	failure in Netbt.sys.
	
	CAUSE
	=====
	
	The computer was configured with a LMHOSTS file and was parsing it in an attempt
	to resolve a NetBIOS name. The process that fails uses a context record. The
	context was cleared by one processor while the other processor was running the
	scanlmost thread. A new Netbt.sys corrects this problem.
	
	
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
	
	
	Additional query words: multi processor multi-processor
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
