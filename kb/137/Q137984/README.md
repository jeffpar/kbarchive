---
layout: page
title: "Q137984: TCP Connection States and Netstat Output"
permalink: kb/137/Q137984/
---

## Q137984: TCP Connection States and Netstat Output

	Article: Q137984
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes TCP connection states and how to read Netstat
	(NETSTAT.EXE) output.
	
	Before data transfer takes place in TCP, a connection must be established. TCP
	employs a three-way handshake (the details of this can be found in RFC793,
	Chapter 3: "Functional Specification").
	
	MORE INFORMATION
	================
	
	TCP Connection States
	---------------------
	
	Following is a brief explanation of this handshake. In this context the "client"
	is the peer requesting a connection and the "server" is the peer accepting a
	connection. Note that this notation does not reflect Client/Server relationships
	as an architectural principal.
	
	1. Connection Establishment
	
	   - The client sends a SYN message which contains the server's port and the
	     client's Initial Sequence Number (ISN) to the server (active open).
	
	   - The server sends back its own SYN and ACK (which consists of the client's
	     ISN + 1).
	
	   - The Client sends an ACK (which consists of the server's ISN + 1).
	
	2. Connection Tear-down (modified three way handshake).
	
	   - The client sends a FIN (active close). This is a now a half-closed
	     connection. The client no longer sends data, but is still able to receive
	     data from the server. Upon receiving this FIN, the server enters a passive
	     close state.
	
	   - The server sends an ACK (which is the clients FIN sequence + 1)
	
	   - The server sends its own FIN.
	
	   - The client sends an ACK (which is server's FIN sequence + 1). Upon
	     receiving this ACK, the server closes the connection.
	
	A half-closed connection can be used to terminate sending data while sill
	receiving data. Socket applications can call shutdown with the second argument
	set to 1 to enter this state.
	
	Netstat Output
	--------------
	
	The above TCP connection states can be monitored in a network trace under the TCP
	flags. It is also possible to determine the status of the connection by running
	the Netstat utility and looking at the State column. Netstat is shipped with
	Windows NT, Windows 95, and TCP/IP-32 for Windows for Workgroups.
	
	State explanations as shown in Netstat:
	
	  State Explanation
	  ------------ --------------------------------------------------------
	
	  SYN_SEND Indicates active open.
	
	  SYN_RECEIVED Server just received SYN from the client.
	
	  ESTABLISHED Client received server's SYN and session is established.
	
	  LISTEN Server is ready to accept connection.
	
	  NOTE: See documentation for listen() socket call. TCP sockets in listening
	  state are not shown - this is a limitation of NETSTAT. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q134404 NETSTAT.EXE Does Not Show TCP Listen Sockets
	
	  FIN_WAIT_1 Indicates active close.
	
	  TIMED_WAIT Client enters this state after active close.
	
	  CLOSE_WAIT Indicates passive close. Server just received first FIN from a
	  client.
	
	  FIN_WAIT_2 Client just received acknowledgment of its first FIN from the
	  server.
	
	  LAST_ACK Server is in this state when it sends its own FIN.
	
	  CLOSED Server received ACK from client and connection is closed.
	
	As an example, consider the following scenario:
	
	A socket application has been terminated, but Netstat reports the socket in a
	CLOSE_WAIT state. This could indicate that the client properly closed the
	connection (FIN has been sent), but the server still has its socket open. This
	could be the result of one instance (among all threads or processes) of the
	socket not being closed.
	
	NOTE: It is normal to have a socket in the TIME_WAIT state for a long period of
	time. The time is specified in RFC793 as twice the Maximum Segment Lifetime
	(MSL). MSL is specified to be 2 minutes. So, a socket could be in a TIME_WAIT
	state for as long as 4 minutes. Some systems implement different values (less
	than 2 minutes) for the MSL.
	
	Additional references:
	
	- "Internetworking with TCP/IP, Volume 1" by Douglas Comer
	
	- "TCP/IP Illustrated, Volume 1" by Richard Stevens.
	
	- "Computer Networks" by Andrew Tanenbaum
	
	Additional query words: prodtcp prodnt 3.11 NtwkWinsock
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : :3.11,3.5,3.51
	
	=============================================================================
	
