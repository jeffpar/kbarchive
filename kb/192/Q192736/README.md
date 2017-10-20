---
layout: page
title: "Q192736: STOP 0x0000000A Blue Screen on Alpha AXP"
permalink: /kb/192/Q192736/
---

## Q192736: STOP 0x0000000A Blue Screen on Alpha AXP

{% raw %}

	Article: Q192736
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Digital Alpha AXP computers running Windows NT 4.0 may display the following
	blue screen STOP message:
	
	  STOP 0x0000000A (0x00000004, 0x00000003,0x00000000,0x80012d90)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The first three parameters are always the same, but the fourth parameter
	varies depending on system configurations.
	
	CAUSE
	=====
	
	This error occurs because of a problem in the hardware abstraction layer (HAL)
	on Alpha AXP computers.
	
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
	
	
	Additional query words: 0xa
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
