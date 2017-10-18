---
layout: page
title: "Q153596: TCP/IP Performance Degrades When Resuming Large Data Transfer"
permalink: kb/153/Q153596/
---

## Q153596: TCP/IP Performance Degrades When Resuming Large Data Transfer

	Article: Q153596
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT clients using TCP/IP may notice a considerable delay resuming data
	transfer to client applications that take a long time to clear the TCP/IP
	receive window.
	
	A Protocol Analyzer trace of the slow performance will show the following
	behavior:
	
	1. The server sends a large data transfer.
	
	2. The client runs out of receive windows space and indicates a zero-byte
	  window.
	
	3. The server enters exponential backoff until it hits the maximum limit of 240
	  seconds between window probe packets. Because the time between probes is
	  longer than the 120-second Address Resolution Packet (ARP) cache life, each
	  new window probe now requires that the server ARP for the client's Media
	  Access Control (MAC) address.
	
	4. The client clears its receive window and advertises additional window space.
	
	5. The server begins transmitting data with an incorrect sequence number.
	
	6. The client acknowledges a previous data send.
	
	7. The server takes up to four minutes to send the correct sequence number.
	
	CAUSE
	=====
	
	The server falls out of sequence because its window probes are 240 seconds apart
	so the server has to ARP for the client's MAC address when the client advertises
	its new window space. The reason this causes the server to fall out of sequence
	is that the server begins sending data immediately after discovering that the
	client has additional window space. Because the ARP table entry for the client
	is in the resolving state when the server starts indicating data, TCP/IP cannot
	send the data to the client.
	
	In accordance with RFC the ARP cache will only buffer one packet when the
	destination IP address is in the resolving state. Windows NT buffers the last
	packet only, so all sends, except for the last, are dropped until the ARP entry
	has been resolved. When the ARP entry for the client is resolved TCP/IP sends
	the last packet that was cached to the client; the packet is out of sequence
	because the prior sends were dropped while the ARP entry was resolving. The
	excessive delay that occurs is caused by the server's taking 240 seconds to send
	the correct sequence number.
	
	The reason the server takes 240 seconds to send the correct sequence number is
	that a retransmit timer has started running. The retransmit timer takes 240
	seconds to complete before the packet with the correct sequence number can be
	sent.
	
	Note: For additional information on the ARP cache please refer to
	
	  RFC 1122.
	
	
	MORE INFORMATION
	================
	
	Example Protocol Analyzer Trace:
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
