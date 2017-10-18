---
layout: page
title: "Q135453: Winsock Application Hangs Using TCP/IP-32"
permalink: kb/135/Q135453/
---

## Q135453: Winsock Application Hangs Using TCP/IP-32

	Article: Q135453
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.11b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Winsock application creates a window (hidden or not) to process connection
	messages from a non-blocking socket, the application may stop responding (hang)
	on the second connection attempt.
	
	CAUSE
	=====
	
	If a Winsock application creates a window to processes Winsock messages for the
	connection, and the application deletes the window before the socket is closed,
	the application may appear to hang if it attempts to establish a new connection.
	Because the socket was not closed before the window was deleted, additional
	Winsock messages may be generated. Because the window that these Winsock
	messages are destined for no longer exists, the messages are undeliverable.
	These undelivered messages cause the application to hang.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b
	
	=============================================================================
	
