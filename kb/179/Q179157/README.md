---
layout: page
title: "Q179157: Stop 0xA in Tcpip.sys When Source Routing Data Exceeds 18 Bytes"
permalink: kb/179/Q179157/
---

## Q179157: Stop 0xA in Tcpip.sys When Source Routing Data Exceeds 18 Bytes

	Article: Q179157
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT in a source-routed Token Ring environment may stop
	randomly with the following blue screen STOP message:
	
	  STOP 0x0000000A IRQL_NOT_LESS_OR_EQUAL
	
	CAUSE
	=====
	
	This error occurs when Windows NT receives multiple address resolution protocol
	(ARP) request frames that contain more than the legal amount of Token Ring
	source routing information. This problem may occur if a source routing bridge
	does not discard frames with invalid routing information (RI) fields.
	
	
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
	
	
	Additional query words: big buffer list corrupt atm 8281
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
