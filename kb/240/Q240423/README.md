---
layout: page
title: "Q240423: RPC Client Does Not Respond After SAP Name Resolution"
permalink: /kb/240/Q240423/
---

## Q240423: RPC Client Does Not Respond After SAP Name Resolution

	Article: Q240423
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95 win98 win98se
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An program that requests Remote Procedure Call (RPC) services on a named server
	by using the SPX protocol may encounter apparent name resolution problems, given
	that subsequent attempts using the network address of the same server succeed.
	The specific situation discussed in this article can be identified only with a
	network trace. The message traffic leading up to this situation is as follows:
	
	- The client issues an IPX Service Advertising Protocol (SAP) broadcast of a
	  Nearest Service query to find a file server.
	
	- The server whose name was submitted to RPC replies with an IPX SAP Nearest
	  Service response.
	
	- The client issues a NetWare Core Protocol (NCP) connect packet to the server.
	
	- The server responds with an NCP reply indicating a successful connection.
	
	- The client stops communicating with the server and does not issue the
	  expected NCP Read Property Value response against the NET_ADDRESS of the
	  server.
	
	- RPC returns error 27 (RPC_S_SERVER_UNAVAILABLE) to the running program. The
	  error message associated with this error is "The RPC server is unavailable."
	
	This problem has been reported to occur on Windows 98 clients, as well as Windows
	95 clients with Distributed Component Object Model (DCOM) version 1.2, or
	Microsoft Internet Explorer version 4.01 installed.
	
	CAUSE
	=====
	
	The cause is an incorrect status returned to the RPC client by the socket
	provider following a successful SAP transaction to verify that the named server
	provides the requested RPC service.
	
	
	WORKAROUND
	==========
	
	If you encounter this problem, you can use the network address of the RPC server
	in place of the server name. The possibility of substituting the address for the
	name is dependent on the program in use, which may or may not allow you this
	level of control.
	
	
	MORE INFORMATION
	================
	
	The following information does not provide minimum and sufficient criteria to
	reproduce the reported problem. It is included to define a sample of the basic
	network configuration underlying the reported problem.
	
	- Software: the MSDN Platform SDK RPC "Hello" sample programs
	
	- Server: Microsoft Windows NT with NWLink IPX/SPX-compatible transport
	
	- Client: Windows 95/Windows 98 with the Client for NetWare Networks and
	  IPX/SPX Compatible Protocol installed
	
	Commands to run:
	
	  Server: hellos -p ncacn_spx -e 2000
	
	  Client: helloc -p ncacn_spx -e 2000 -n <servername>
	
	Replace <servername> with the actual name of the Windows NT server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
