---
layout: page
title: "Q138070: Protocol for Remote OLE Automation Depends on First Client"
permalink: kb/138/Q138070/
---

## Q138070: Protocol for Remote OLE Automation Depends on First Client

	Article: Q138070
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The network protocol used between a client and a server during a Remote OLE
	Automation Session depends on whether a prior connection still exists between
	the two computers. Subsequent connections to that server depend on the protocol
	used for establishing the first connection to that server, if this first client
	makes a call to the server that returns another object.
	
	MORE INFORMATION
	================
	
	If Client1 uses the TCP/IP protocol to connect to Server1 and calls a method on
	an object1 (in Server1) that returns an object2, a new connection will be
	established between client1 and object2 of Server1 that also uses TCP/IP. Now,
	if a client2 connects to server1 using the IPX protocol and calls the same
	method on object1 that returns it an object2, a new connection will be
	established between client2 and object2 of Server1 that uses the TCP\IP
	protocol, even though the original connection for client2 used IPX.
	
	If the first connection between client1 and server1 is severed before a
	connection is made with client2, the new client2 connection that is established
	on returning object2 would now use the IPX protocol.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	
