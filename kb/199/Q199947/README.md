---
layout: page
title: "Q199947: TCP/IP: Windows NT 4.0 Does Not Support TCP Scale Option"
permalink: kb/199/Q199947/
---

## Q199947: TCP/IP: Windows NT 4.0 Does Not Support TCP Scale Option

	Article: Q199947
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 TCP/IP does not support the TCP Window Scale Option specified in
	RFC 1323 for TCPWindowSize. Therefore, the maximum TCP receive window size,
	TCPWindowSize, of Windows NT 4.0 TCP/IP is 64 KB (65,535 bytes) because the
	field in the TCP header is 16 bits in length.
	
	MORE INFORMATION
	================
	
	The TCP receive window size is the amount of receive data (in bytes) that can be
	buffered at one time on a connection. The sending host can send only that amount
	of data before waiting for an acknowledgment (ACK) and window update from the
	receiving host.
	
	The TcpWindowSize registry parameter determines the maximum TCP receive window
	size offered by the computer. The receive window specifies the number of bytes a
	sender can transmit without receiving an acknowledgment (an ACK); in other
	words, it indicates the amount of receive data (in bytes) that can be buffered
	at one time on a connection. The sending host can send only the amount of data
	indicated by the receive window before waiting for an acknowledgment and window
	update from the receiving host.
	
	In general, larger receive windows improve performance over high delay, high
	bandwidth networks. For greatest efficiency, the receive window should be an
	even multiple of the TCP maximum segment size (MSS).
	
	However, if your clients experience connectivity problems because they time out
	before data transmission reaches them, you can change the value of the
	TcpWindowSize parameter. Reducing the value of TcpWindowSize causes an
	acknowledgment for data received to be sent to the sender sooner. Earlier
	acknowledgment lowers the possibility that the sender will time out while
	waiting for an acknowledgment. However, it also increases the amount of network
	traffic and causes slower throughput.
	
	The TCP/IP stack is designed to self-tune in most environments. Instead of using
	a hard-coded default receive window size, TCP adjusts the window size to even
	increments of the MSS negotiated during connection setup. Matching the receive
	window to even increments of the MSS increases the percentage of full-sized TCP
	segments used during bulk data transmission. By default, TcpWindowSize is set to
	8 KB, rounded up to the nearest MSS increment for the connection. If that
	increment is not at least four times the MSS, it is adjusted to four times the
	MSS, with a maximum size of 64 KB. The maximum window size is 64 KB because the
	field in the TCP header is 16 bits in length.
	
	For Ethernet, the receive window is usually set to 8,760 bytes (that is, 8,192
	rounded up to six 1,460-byte segments). For 16/4 Token Ring or FDDI, it is set
	to around 16 KB. These are default values, and it is not generally advisable to
	alter them. However, if necessary, you can either change TcpWindowSize to
	globally change the setting for the computer, or use the setsockopt Windows
	Sockets call to change the setting on a per-socket basis.
	
	Request for Comments (RFC) 1323 describes a TCP window scale option that can be
	used to obtain larger receive windows; however, Windows NT-based TCP/IP does not
	yet implement that option.
	
	Additional query words: NT TCPIP TCPWindowSize RFC Scale
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
