---
layout: page
title: "Q192765: STOP 0x0000000A on SMP Computers"
permalink: /kb/192/Q192765/
---

## Q192765: STOP 0x0000000A on SMP Computers

{% raw %}

	Article: Q192765
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fixkbbuglist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Server may show a blue screen STOP error with the following
	message:
	
	  STOP 0x0000000A (0xBAD0B0E4, 0x00000002, 0x00000001, 0x800032EA)
	
	NOTE: The first parameter in parentheses is always the same. The fourth parameter
	address falls within the Hal.dll.
	
	CAUSE
	=====
	
	Windows NT is trying to free an object that has already been freed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.
	
	
	Additional query words: kbDSupport 0xa 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
