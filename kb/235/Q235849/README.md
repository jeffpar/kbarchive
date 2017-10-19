---
layout: page
title: "Q235849: DEC Alpha SNA Server Drops Client LAN Connection, Logs Event 631"
permalink: /kb/235/Q235849/
---

## Q235849: DEC Alpha SNA Server Drops Client LAN Connection, Logs Event 631

	Article: Q235849
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SNA application is running on a DEC Alpha processor, on either SNA Server
	or an SNA Server Windows NT client, the client-server LAN session may
	unexpectedly stop responding (hang) with the following event
	
	  Event ID: 631
	  Source: SNA Server (or SNA Application)
	  Description: Invalid message received across the LAN: remote: (IP
	  address):1477 Bad sequence number 183 (expected 184)
	
	where the expected sequence number may be one less or one more than expected. If
	this occurs while an APPC application is sending or receiving data, the APPC
	application may hang unexpectedly, or receive the following APPC error message:
	
	  primary_rc = F003 (AP_COMM_SUBSYSTEM_ABENDED)
	
	The Event 631 may be logged on the DEC Alpha computer where the SNA Server or SNA
	client software is running, or on a separate SNA Server or SNA client computer
	that is communicating to the DEC Alpha computer.
	
	CAUSE
	=====
	
	If SNA Server data is being sent and received simultaneously over a single
	client-server LAN connection (to or from one client), internal "send sequence
	number" and "receive sequence number" variables may be incremented from
	different threads at the same instant. If this timing condition occurs on a DEC
	Alpha computer, one sequence number may fail to be updated, causing SNA Server
	to incorrectly detect an out-of-sequence message. These sequence number
	variables occur on consecutive BYTE boundaries within a non-packed structure.
	The DEC Alpha appears to improperly lock one of the BYTE values during a
	increment operation on an adjoining, separate BYTE value, preventing it from
	being updated.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0, 4.0 SP1 and 4.0
	SP2.
	 This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	SNA Server has worked around this problem by adding 7 pad bytes between the send
	and receive sequence number (BYTE) values, which forces these counters to fall
	on separate DWORD (8 byte) boundaries within memory. With these extra pad bytes,
	the Event 631 problem no longer occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
