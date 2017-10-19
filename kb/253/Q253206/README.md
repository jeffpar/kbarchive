---
layout: page
title: "Q253206: Active TN3270 Clients Might Hang Unexpectedly"
permalink: /kb/253/Q253206/
---

## Q253206: Active TN3270 Clients Might Hang Unexpectedly

	Article: Q253206
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An active TN3270 client might hang unexpectedly when pressing a key to send data
	to the host. At this point, the client is no longer able to send or receive host
	data. Microsoft SNA Server Manager continues to show an "In Session" status for
	the TN3270 session that is in this state.
	
	CAUSE
	=====
	
	A small timing window exists that allows a TN3270 client to send a request to a
	TN3270 server when the TN3270 server is expecting a response for some host data
	that it just sent to the client. At this point, the TN3270 server queues the new
	request the client sent because it cannot be sent to the host until a response
	to the previous data is sent. The problem is that the TN3270 server is unable to
	read any responses from the client after it has queued the previous request. The
	TN3270 client hangs at this point because the TN3270 server no longer sends data
	to or receives data from this client.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After applying the update, the TN3270 server no longer sends requests to the
	host when the host is expecting a response for that particular session. In
	addition, it no longer queues requests from clients when it is expecting a
	response from the client.
	
	The issue described here is extremely hard to reproduce because the timing window
	that allows this to occur is very small. The following is a scenario that can
	expose this timing window:
	
	1. Host sends an RU with EB set.
	
	2. TN3270 Server sends this to the client, which unlocks the keyboard. At this
	  point, the client is able to send data.
	
	3. Host sends a BID to initiate a new Bracket on the session.
	
	4. SNA Server sends a BID +RSP.
	
	5. Host sends an RU that contains data. This RU also has a Begin Bracket (BB)
	  flag set.
	
	6. The TN3270 server sends this data to the client indicating the a response is
	  required to acknowledge the receipt of the data.
	
	7. The client presses a key to send data to the host.
	
	The timing has to be such that the last two steps occur at approximately the same
	time for the problem to occur. Once the TN3270 client receives the data from the
	host, the keyboard locks until all of the data is received and the client
	receives direction to send. Therefore, the client has to send the request after
	the TN3270 server has sent the data to the client, but before the TN3270
	emulator processes the data such that the keyboard is locked.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
