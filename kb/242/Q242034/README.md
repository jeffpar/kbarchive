---
layout: page
title: "Q242034: Error When Printing to Lexmark Optra w/Far East Windows NT SP5"
permalink: kb/242/Q242034/
---

## Q242034: Error When Printing to Lexmark Optra w/Far East Windows NT SP5

	Article: Q242034
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Far East version(s) of Windows NT 4.0 Service Pack 5.
	
	SYMPTOMS
	========
	
	When you print a test page on a Lexmark Optra S 2450 with Far East versions of
	Windows NT 4.0 Service Pack 5 (SP5), you may receive a
	"PAGE_FAULT_IN_NONPAGED_AREA" error message on a blue screen.
	
	CAUSE
	=====
	
	This behavior occurs when text is formatted. Unidrv calls a function that does
	not adjust to the current code page. This creates unpredictable results on
	computers running Far East versions of Windows NT 4.0 SP5.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
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
	NT Server 4.0 Service Pack 6 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 6.
	
	Additional query words: fe
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
