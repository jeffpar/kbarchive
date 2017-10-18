---
layout: page
title: "Q200770: TCP/IP Connection Attempts Take Longer to Time Out"
permalink: kb/200/Q200770/
---

## Q200770: TCP/IP Connection Attempts Take Longer to Time Out

	Article: Q200770
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 04-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that try to establish a session to a remote host using NetBIOS over
	TCP/IP may experience a time-out longer than expected when the remote host is
	unavailable.
	
	The "longer than expected" time-out occurs when the TCP connection attempt
	process, which starts with the original SYN segment, is repeated.
	
	For example, if the TcpMaxConnectRetransmissions registry parameter is set to 1,
	you would see the following incorrect behavior when the remote or target host is
	down:
	
	1. The client computer sends the first SYN segment.
	
	2. Three seconds later, the SYN segment is retransmitted
	
	3. Six seconds later, a different initial SYN segment, with a different sequence
	  number, is sent.
	
	4. Three seconds later, the second initial SYN segment is retransmitted.
	
	5. Six seconds later, TCP reports a time-out error to the application.
	
	The total time-out is approximately 18 seconds.
	
	CAUSE
	=====
	
	This behavior occurs because NetBIOS over TCP/IP (NetBT) is requesting the
	connection a second time.
	
	RESOLUTION
	==========
	
	A new NetBT.sys file included in Windows NT 4.0 Service Pack 4 fixes this
	problem.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	With the latest service pack, you will see the following behavior while trying
	to connect to another computer:
	
	TCP, acting as the transport for the application, sends a SYN segment to the
	destination host specifying the initial sequence number in an attempt to
	initialize the connection. If the destination host is unavailable, TCP will
	retransmit this original SYN packet the number of times specified in the
	TcpMaxConnectRetransmissions registry parameter (the default is three times).
	The retransmission time-out is doubled with each successive retransmission in a
	given connection attempt. The initial time-out value is three seconds.
	
	After retransmitting the number of times specified in the registry key mentioned
	above, the transport will notify the application of a time-out error.
	
	For example, if the TcpMaxConnectRetransmissions registry parameter is set to 1,
	you should see the following correct behavior when the destination host is
	down:
	
	1. Client sends the first SYN segment
	
	2. Three seconds later, the SYN packet is retransmitted
	
	3. Six seconds later, TCP reports a timeout error to the application.
	
	This time, the total time-out is approximately nine seconds, which is the correct
	behavior with the default configuration settings. For additional information,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q172983 Explanation of the Three-Way Handshake via TCP/IP
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
