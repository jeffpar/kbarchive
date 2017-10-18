---
layout: page
title: "Q152474: Window Socket Application Failure with Connection Reset Event"
permalink: kb/152/Q152474/
---

## Q152474: Window Socket Application Failure with Connection Reset Event

	Article: Q152474
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows Socket (WinSock) application fails to receive data from a remote
	server. It may display a message indicating that a Connection Reset message or a
	WSAECONNRESET event occurred.
	
	CAUSE
	=====
	
	Under certain circumstances, a condition exists with Microsoft TCP/IP where a
	TCP packet can be sent on a connection that has already closed causing a Reset
	packet to be issued. This causes the WinSock application to fail with a
	WSAECONNRESET event.
	
	Detailed Explanation:
	
	In a normal WinSock client-server TCP/IP communication sequence, the following
	type of conversation could be observed with a Network Monitor product.
	
	  CLIENT               SERVER
	  ======               ======
	  SYN         -->
	           <--      SYN - ACK
	  ACK         -->
	
	  TCP (Data - request) -->
	           <--      ACK
	
	           <--      TCP (Data - response)
	  ACK         -->
	
	     ... potentially many Data/Ack response packets ...
	
	  FIN         -->
	           <--      ACK
	           <--      FIN
	  ACK         -->
	
	When the final FIN packet is sent by the server, and the ACK packet returns, the
	server is free to close the socket created for the client communication. In this
	instance, the client initiated the closing of communications, followed by the
	server.
	
	In a WinSock client-server TCP/IP communication sequence that exposes the
	Connection Reset problem, the following type of conversation could be observed
	with a Network Monitor product.
	
	  CLIENT               SERVER
	  ======               ======
	  SYN         -->
	           <--      SYN - ACK
	  ACK         -->
	
	  TCP (Data - request) -->
	           <--      ACK
	
	  FIN         -->
	           <--      ACK
	
	           <--      TCP (Data - response)
	  ACK         -->
	
	     ... potentially many Data/Ack response packets ...
	
	           <--      FIN
	  ACK         -->
	
	  ACK (this is bad) -->
	
	           <--      RESET
	  ACK         -->
	
	In the problem scenario above, the following events transpired. The client issues
	a Shutdown on their local socket after they sent the request to the server,
	notifying the socket that it will not be sending any more data. This causes a
	FIN packet to be sent very early in the conversation (this is perfectly
	legitimate programming style). Later, the server issues a FIN to indicate it is
	done sending data, and the client acknowledges the FIN packet. Due to the way
	that Delayed Acknowledgments worked, it was possible for another ACK to be sent
	to the server after the ACK for the FIN packet. If the server has already closed
	the socket it was communicating with the client on, this will generate a RESET
	packet to the client.
	
	If the client was still reading data, the RESET packet will cause the client read
	of data to return in error with a WSAECONNRESET, indicating that the connection
	was reset.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	Obtain the fix mentioned below or wait for the next Windows NT Service Pack.
	
	The fix was to modify TCPIP.SYS to not send an acknowledgment if an
	acknowledgment was already sent for a FIN packet.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt wsock32
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
