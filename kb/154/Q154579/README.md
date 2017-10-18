---
layout: page
title: "Q154579: Slow TCP/IP Performance When Resuming Large Data Transfer"
permalink: kb/154/Q154579/
---

## Q154579: Slow TCP/IP Performance When Resuming Large Data Transfer

	Article: Q154579
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients using the TCP/IP protocol may experience a considerable delay
	resuming data transfer to client applications that take a long time to clear the
	receive window.
	
	Observing a Protocol Analyzer trace of the slow performance shows the following
	behavior:
	
	1. The server sends a large data transfer.
	
	2. The client runs out of receive window space and indicates a zero-byte window.
	
	3. The server enters exponential backoff until it hits the maximum limit of 240
	  seconds between window probe packets. Because the time between probes is
	  longer than the 120-second arp cache life, each new window probe requires
	  that the server arp for the client's Media Access Control (MAC) address.
	
	4. The client clears its receive window and advertises additional window space.
	
	5. The server begins transmitting data with an incorrect sequence number.
	
	6. The client acknowledges a previous data send.
	
	7. The server takes up to four minutes to send the correct sequence number.
	
	Sample Protocol Analyzer Trace
	------------------------------
	
	1  0.000   Client -> Server
	  TCP .A...., len:    0, seq:2192824888, ack: 578989364, win:    0
	2  153.452 Client -> Server
	  TCP .AP..., len:  512, seq:2192824888, ack: 578989364, win:    0
	3  0.008   Client -> Server
	  TCP .A...., len:    0, seq:2192825400, ack: 578989364, win:14336
	4  0.002   Client -> Server ARP Reply
	5  0.001   Server -> Client
	  TCP .A...., len: 1460, seq: 578992284, ack:2192825400, win:48640
	6  0.005   Client -> Server
	  TCP .A...., len:    0, seq:2192825400, ack: 578989364, win:14336
	7  0.195   Client -> Server
	  TCP .A...., len:    0, seq:2192825400, ack: 578989364, win:14336
	8  4.785   Server -> Client
	  TCP .A...., len:  357, seq: 578993744, ack:2192825400, win:48640
	9  0.003   Client -> Server
	  TCP .A...., len:    0, seq:2192825400, ack: 578989364, win:14336
	10 0.193   Client -> Server
	  TCP .A...., len:    0, seq:2192825400, ack: 578989364, win:14336
	11 235.180 Client -> Server
	  ARP Reply
	12 0.000   Server -> Client
	  TCP .A...., len: 1460, seq: 578989364, ack:2192825400, win:48640
	
	CAUSE
	=====
	
	The server falls out of sequence because its window probes are 240 seconds
	apart. Therefore, the server has to arp for the client's MAC address when the
	client advertises its new window space.
	
	The reason this causes the server to fall out of sequence is that the server
	begins sending data immediately after discovering that the client has additional
	window space. Because the arp table entry for the client is in the resolving
	state when the server starts indicating data, TCP/IP cannot send the data to the
	client. Per RFC, the arp cache only buffers one packet when the destination IP
	address is in the resolving state. Windows 95 buffers the last packet only, so
	all sends, except for the last, are dropped until the arp entry has been
	resolved. When the arp entry for the client is resolved, TCP/IP sends the last
	packet that was cached to the client, which is out of sequence because the prior
	sends were dropped while the arp entry was resolving.
	
	The delay that occurs is caused by the server taking 240 seconds to send the
	correct sequence number.
	
	The reason the server takes 240 seconds to send the correct sequence number is
	that a retransmit timer started running. The retransmit timer takes 240 seconds
	to finish before the packet with the correct sequence number can be sent.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For additional information about the ARP cache, please refer to RFC 1122.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
