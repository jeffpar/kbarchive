---
layout: page
title: "Q153470: Incorrect Error Code Returned for Locked Files"
permalink: kb/153/Q153470/
---

## Q153470: Incorrect Error Code Returned for Locked Files

	Article: Q153470
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Windows 95-based computer to run a program on a Novell
	NetWare 3.1x or 4.x server, you may notice incorrect error codes returned to the
	program when you try to access a locked file on the NetWare server.
	
	NOTE: This problem occurs with both the Microsoft Client for NetWare Networks and
	the Microsoft NetWare Directory Service (MSNDS) client.
	
	CAUSE
	=====
	
	There is an error in the actual error code return value for a locked file in the
	Nwredir.vxd file.
	
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
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
