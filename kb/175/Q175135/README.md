---
layout: page
title: "Q175135: Unable to View NetWare Print Queues"
permalink: /kb/175/Q175135/
---

## Q175135: Unable to View NetWare Print Queues

	Article: Q175135
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbfile kbnetwork kbprint win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Client for NetWare Networks, you may be unable to
	view the contents of NetWare print queues, and in the Printers folder, the
	NetWare printers may appear to be off-line.
	
	Note that this does not occur you are using the Microsoft Service for NetWare
	Directory Services (MSNDS).
	
	CAUSE
	=====
	
	This behavior can occur when you are attached to multiple NetWare servers whose
	names are almost identical. This can occur when the name of one NetWare server
	to which you are attached is a subset of another NetWare server to which you are
	attached. For example:
	
	  Server 1:  MY_SERVER
	  Server 2:  MY_SERVER_TOO
	
	In this example, you may be unable to view print queues on MY_SERVER_TOO while
	attached to MY_SERVER.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the Microsoft Service for NetWare Directory
	Services (MSNDS). With MSNDS you can connect to both NetWare 4.x (NDS) servers
	and NetWare 3.x (Bindery) servers.
	
	For additional information on MSNDS, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q138709 Microsoft Service for NetWare Directory Services Available
	
	  Q164558 Configuring MSNDS to Log in to a NetWare Bindery Server
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	
	Additional query words: novell
	
	======================================================================
	Keywords          : kb3rdparty kbfile kbnetwork kbprint win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Hardware          : x86
	
	=============================================================================
	
