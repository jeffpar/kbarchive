---
layout: page
title: "Q140325: How to Determine Loss of Client/Server Connection"
permalink: /kb/140/Q140325/
---

## Q140325: How to Determine Loss of Client/Server Connection

	Article: Q140325
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use keepalive probes to determine loss of stream
	connection.
	
	MORE INFORMATION
	================
	
	In the context of this article, the "client" is the peer computer requesting a
	connection, and the "server" is the peer computer accepting a connection. This
	notation does not reflect Client/Server relationships as an architectural
	principal.
	
	Consider the following scenario (half-open connection):
	
	The client has established stream connection with the server. If client crashes
	or a network error occurs (for example, intermediate router goes down), the
	server has no way of knowing this, unless it tries to use send(). In this case,
	send fails with the WSAECONNRESET error. If the server does not try to send data
	to a client, the connection is kept open on the server side for infinite amount
	of time.
	
	Even if WSAAsyncSelect() with the FD_CLOSE parameter is used to determine loss of
	connection, event notification is not triggered. No events get posted because
	virtual circuit never go to a FIN WAIT or CLOSE WAIT state (crashed client never
	called shutdown or closesocket).
	
	This situation can be avoided if keepalive probe packets are used. Note that
	keepalive probe packets are not a required part of the TCP specification.
	Keepalive packets are used to probe a connection that has been inactive for a
	long time. The peer initiates a disconnect when the probes do not get through.
	Keepalive packets for TCP connection can be turned on by using setsockopt() call
	with SO_KEEPALIVE option.
	
	The following registry entries control keepalive probe packet parameters on
	computers running Windows NT or Windows 95 (note that not all of the entries can
	be found in the registry by default). Changing registry parameters affects all
	TCP/IP stream connections on the system.
	
	KeepAliveInterval - This parameter determines the interval separating keep alive
	retransmissions until a response is received.
	
	KeepAliveTime - This parameter controls how often TCP attempts to verify that an
	idle connection is still intact by sending a keep alive packet.
	
	TcpMaxDataRetransmissions - This parameter controls the number of times TCP will
	retransmit an individual data segment (non-connect segment) before aborting the
	connection.
	
	NOTE: The TcpMaxDataRetransmission parameter is NOT a valid setting under Windows
	95. For additional information on valid TCP/IP registry parameters in Windows
	95, please see the following article in the Microsoft Knowledge Base:
	
	  Q158474 Windows 95 TCP/IP Registry Entries
	
	The above entries are found in following registry locations:
	
	Windows 95
	----------
	
	  \HKEY_LOCAL_MACHINE
	   \System
	    \CurrentControlSet
	     \Services
	      \VxD
	       \MSTCP
	
	NOTE: To make the appropriate changes to the value above in the registry under
	Windows 95, go to the above location, click the Edit menu, point to New, and
	click String Value.
	
	Windows NT
	----------
	
	  \HKEY_LOCAL_MACHINE
	   \System
	    \CurrentControlSet
	     \Services
	      \TCPIP
	       \Parameters
	
	NOTE: To make the appropriate changes to the values above in the registry under
	Windows NT, go to the above location, click Add Value on the Edit menu. The Data
	Type should be REG_DWORD.
	
	For information on how to configure above entries, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	IMPORTANT: After you alter the registry, you must restart your computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
