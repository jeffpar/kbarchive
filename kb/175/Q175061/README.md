---
layout: page
title: "Q175061: OS/2 Clients Hang Connecting to Windows 95 NWServer"
permalink: kb/175/Q175061/
---

## Q175061: OS/2 Clients Hang Connecting to Windows 95 NWServer

	Article: Q175061
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an OS/2-based computer and you try to connect to a Windows
	95-based computer that is using File and Printer Sharing for NetWare, your
	computer may hang (stop responding).
	
	CAUSE
	=====
	
	This behavior occurs when the NetWare Requester for OS/2 queries for a list of
	mounted volumes, and the Windows 95 File and Printer Sharing service for NetWare
	Networks (NWServer) responds in a manner that causes the requester to continue
	querying indefinitely.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
