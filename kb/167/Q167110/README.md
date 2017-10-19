---
layout: page
title: "Q167110: WinNT Err. Msg: Stop 0x1E in Fpnwsrv.sys"
permalink: /kb/167/Q167110/
---

## Q167110: WinNT Err. Msg: Stop 0x1E in Fpnwsrv.sys

	Article: Q167110
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run File and Print Services for NetWare (FPNW), you may encounter a
	STOP screen with the following parameters:
	
	  STOP 0x0000001E (0xc0000005, f5c3ed03, 00000000, 00000104)
	
	NOTE: The second and forth parameters may vary.
	
	
	CAUSE
	=====
	
	This problem occurs when Windows NT attempts to close an invalid connection.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	
	
	Additional query words: 4.00 kernel blue screen
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetware400 kbServicesNetwareSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
