---
layout: page
title: "Q229647: RPC, RAS, PPTP (40-bit) Encryption Added to Windows NT 4.0 Frenc"
permalink: kb/229/Q229647/
---

## Q229647: RPC, RAS, PPTP (40-bit) Encryption Added to Windows NT 4.0 Frenc

	Article: Q229647
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	French version(s) of Windows NT 4.0.
	
	SYMPTOMS
	========
	
	Prior to Windows NT 4.0 Service Pack 5, the French versions of the following
	products did not support encryption:
	
	- Microsoft Windows NT Server 4.0 with Remote Access Service (RAS and PPTP)
	
	- Microsoft Systems Management Server Remote Control (Remote Procedure Call
	  (RPC))
	
	- Microsoft SQL Server (RPC)
	
	- Microsoft Exchange Server (RPC)
	
	CAUSE
	=====
	
	French law prohibits the supply of products containing encryption capabilities
	without prior authorization. Microsoft has been granted the right to supply
	40-bit encryption for RAS, RPC, and PPTP in Windows NT 4.0.
	
	
	The following are the binary files affected:
	
	- Ntlms128.dll
	
	- Ntlmssps.dll
	
	- Secur128.dll
	
	- Security.dll
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	
	Additional query words: sp5 france
	
	======================================================================
	Keywords          : kbWinNT400sp5fix kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
