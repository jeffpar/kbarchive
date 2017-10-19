---
layout: page
title: "Q157032: Services for Macintosh May Cause STOP 0x0A During High Load"
permalink: /kb/157/Q157032/
---

## Q157032: Services for Macintosh May Cause STOP 0x0A During High Load

	Article: Q157032
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You have a system with more than one CPU and Services for Macintosh installed.
	Under stress, the server intermittently stops with the following error:
	
	  STOP 0x0000000a (parameter, parameter, parameter, parameter)
	
	NOTE: This problem has been observed while using a SysKonnect FDDI adapter, but
	it may occur with other NDIS drivers as well.
	
	
	CAUSE
	=====
	
	This problem is caused because you are using a network interface card (NIC)
	driver that is written as a "full NDIS driver" to gain maximum performance,
	which causes synchronization problems in Sfmsrv.sys, a component of Services for
	Macintosh.
	
	
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
	Keywords          : kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
