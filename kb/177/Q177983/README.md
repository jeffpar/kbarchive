---
layout: page
title: "Q177983: Stop 0xA in Netbt.sys with Greater Than 64 Adapters"
permalink: /kb/177/Q177983/
---

## Q177983: Stop 0xA in Netbt.sys with Greater Than 64 Adapters

{% raw %}

	Article: Q177983
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT server is configured such that the WINS client (TCP/IP) is bound
	to more than 64 adapter interfaces. When it runs under Windows NT 4.0 with no
	service packs applied, the computer will stop responding (hang).
	
	If it runs under Windows NT 4.0 with Service Pack 3 applied, your computer may
	STOP with the following blue screen message:
	
	  STOP 0x0000000A IRQL_NOT_LESS_OR_EQUAL
	  (fee3b797,00000002,fee3b797,ff1e82e8)
	
	NOTE: The parameters in the STOP code will be different depending on your
	configuration, but the first and third parameters will be the same as each
	other.
	
	CAUSE
	=====
	
	A worker routine in Netbt.sys returned at a raised IRQL.
	
	
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
	
	
	Additional query words: crash multiport bindings sixty four ras freeze
	======================================================================
	Keywords          : kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
