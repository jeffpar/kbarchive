---
layout: page
title: "Q187940: Input Filters over IPX WAN Routing May Fail to Filter Packets"
permalink: kb/187/Q187940/
---

## Q187940: Input Filters over IPX WAN Routing May Fail to Filter Packets

	Article: Q187940
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
	
	When input filters are set to deny packets coming into a computer running
	Windows NT Server 4.0 that is acting as a router, the Windows NT router may not
	properly filter out the packet types and may forward the packet to the other
	side of the router. Outbound filters on the computer running Windows NT Server
	work correctly and properly filter out packets.
	
	CAUSE
	=====
	
	IpxFwdInternalReceive detects that the packets should be dropped but does not
	communicate this to the IPX stack.
	
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
	
	Additional query words: IPX/SPX nwlink nwlnk
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
