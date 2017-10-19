---
layout: page
title: "Q246518: Cannot Remotely Add or Delete Printer Ports in Windows NT Server"
permalink: /kb/246/Q246518/
---

## Q246518: Cannot Remotely Add or Delete Printer Ports in Windows NT Server

	Article: Q246518
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add or delete printer ports on a remote Microsoft Windows NT
	Server 4.0-based print server, you cannot do so.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To add, delete, or configure printer ports, you must administer the print server
	locally.
	
	To work around this issue, use local administration of the print server to add,
	delete, or configure printer ports.
	
	NOTE: To perform remote administration of a print server, you can either use a
	third-party utility or create a utility by using the AddPort application
	programming interface (API) function included in the Microsoft Win32 Software
	Development Kit.
	
	MORE INFORMATION
	================
	
	Local administration of a print server is explained on page 193 of Concepts and
	Planning, which is part of the documentation for Microsoft Windows NT Server
	4.0.
	
	Additional query words: nt 4.0 add remote print server remove configure
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
