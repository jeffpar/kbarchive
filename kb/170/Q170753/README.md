---
layout: page
title: "Q170753: Window Focus Set to Invoke Wrong 16-bit Application Through DDE"
permalink: kb/170/Q170753/
---

## Q170753: Window Focus Set to Invoke Wrong 16-bit Application Through DDE

	Article: Q170753
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	When a user double-clicks a document, based on the association of the document
	and the DDE commands specified, the documents will be passed to the proper
	application. The current focus will be set to that application as well. This is
	the default behavior of Window NT. When the user is running several 16-bit
	applications in single memory space, the default behavior stays the same, with
	one difference: the current focus is not set to the correct 16-bit application.
	This problem only happens when 16-bit applications are run under a single memory
	space.
	
	CAUSE
	=====
	
	Windows NT was not passing the information to the correct application.
	
	
	RESOLUTION
	==========
	
	Use one of the following methods to correct this issue:
	
	- To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	  Windows NT Server 4.0, Terminal Server Edition. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	-or-
	
	- Run each 16-bit application in a separate memory space.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: dosapp 16 bit 16bitapp
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
