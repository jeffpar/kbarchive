---
layout: page
title: "Q156655: Memory Leak and STOP Screens Using Intermediate NDIS Drivers"
permalink: /kb/156/Q156655/
---

## Q156655: Memory Leak and STOP Screens Using Intermediate NDIS Drivers

{% raw %}

	Article: Q156655
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When intermediate (layered) NDIS miniport drivers are in use on Windows NT 4.0,
	you may experience one or both of the following:
	
	- A memory leak in kernel non-paged pool memory. Over time, memory may be
	  depleted to the point where system stability is compromised.
	
	- You may receive the following blue-screen STOP error message with parameters
	  that indicate the bad instruction is in the Ndis.sys driver:
	
	  STOP: 0x0000000A (0x00000014, 0x00000002, 0x00000000, 0xFCBA1062).
	  IRQL_NOT_LESS_OR_EQUAL (* Address fcba1062 has base at fcb95000 - NDIS.SYS)
	
	CAUSE
	=====
	
	Intermediate drivers are typically add-ons that layer themselves over hardware
	drivers as a filter to provide additional functionality, such as data encryption
	or other value added services. The Ndis.sys driver included in Windows NT 4.0
	has been found to have some deficiencies when such intermediate drivers are
	used.
	
	
	RESOLUTION
	==========
	
	You can work around this problem by removing any unnecessary filter drivers.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/ndis-fix
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: bug trap
	
	======================================================================
	Keywords          : kbfile kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
