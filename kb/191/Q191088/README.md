---
layout: page
title: "Q191088: Printer Prompts for Paper with Dutch Workstations"
permalink: kb/191/Q191088/
---

## Q191088: Printer Prompts for Paper with Dutch Workstations

	Article: Q191088
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a custom form to print to a network printer, a "PC LOAD LETTER" (or
	similar) message appears on the printing device. This only happens when running
	different language versions of the Windows NT software on the client and server.
	For example, a client may be running the Dutch version of Windows NT Workstation
	and your print server may be running the U.S. version of Windows NT Server.
	
	NOTE: This problem only occurs with PCL-based printing devices.
	
	CAUSE
	=====
	
	This problem occurs because the text strings representing the built-in form
	names are localized.
	
	When connecting to a print server, the form names at the client are compared with
	those at the server. Since the form names are localized, this can cause the
	client's local forms database to become inconsistent with the list of forms at
	the server. This in turn can cause the printer driver to select the wrong paper
	size.
	
	
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
	
	Additional query words: localspl European french
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
