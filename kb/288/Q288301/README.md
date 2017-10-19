---
layout: page
title: "Q288301: Server Drops All Connections, System Logs Multiple Event 2000"
permalink: /kb/288/Q288301/
---

## Q288301: Server Drops All Connections, System Logs Multiple Event 2000

	Article: Q288301
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At random intervals, the server may drop all connections, and no new connections
	can be established. Administrators can log on to the local computer, but Server
	Manager is not displayed correctly. Multiple instances of Event ID 2000 may be
	recorded in the System event log, with this error message:
	
	  Event ID: 2000
	  Source: Srv
	  Description: The server's call to a system service failed unexpectedly.
	
	  0000: 00040000 00540001 00000000 c00007d0
	  0010: 00000000 c0000054 00000000 00000000
	  0020: 00000000 00000000 05930bd3
	
	CAUSE
	=====
	
	This behavior can occur when you have an early version of the Cheyenne Open File
	Agent program installed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, obtain and install the latest version of Open File
	Agent.
	
	WORKAROUND
	==========
	
	To work around this behavior, remove the Cheyenne Open File Agent program.
	
	MORE INFORMATION
	================
	
	For more information about the latest version of Open File Manager, contact St.
	Bernard Software.
	
	For information about how to contact St. Bernard Software, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
