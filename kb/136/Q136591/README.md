---
layout: page
title: "Q136591: MS Client for NetWare Does Not Synchronize Time with Server"
permalink: kb/136/Q136591/
---

## Q136591: MS Client for NetWare Does Not Synchronize Time with Server

	Article: Q136591
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Client for NetWare Networks does not synchronize time with your
	preferred NetWare server.
	
	RESOLUTION
	==========
	
	To synchronize time with a server, include the following line in your login
	script or in a batch file in your Startup folder
	
	  net time -s \\<NetWare server> /y
	
	where <NetWare server> is the name of the server you want to use.
	
	The Microsoft Service for NetWare Directory Services behaves similarly to the
	Novell VLM client. This service automatically synchronizes time with the server
	unless the following command is encountered in the system or user login script:
	
	  set_time {on | off }
	
	MORE INFORMATION
	================
	
	Novell's redirector, NETX, automatically synchronizes time with the preferred
	server if the following statement does not appear in the Net.cfg file:
	
	  set station time = off
	
	You can also synchronize time with NETX using the "set_time {on | off }"
	statement in a login script.
	
	For additional information about these statements, consult your NetWare
	documentation or local Novell reseller.
	
	For information about synchronizing time with Microsoft Windows NT servers,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q90334 Using NET TIME Command to Set Workgroup Clocks
	
	You can also type the following command at an MS-DOS prompt for the "net time"
	statement syntax:
	
	  net time /?
	
	Additional query words: nwlscon nwlsproc msnds
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
