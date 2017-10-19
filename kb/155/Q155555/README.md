---
layout: page
title: "Q155555: SNA Server Event 686 When Using MS-DOS Client with ODI Stack"
permalink: /kb/155/Q155555/
---

## Q155555: SNA Server Event 686 When Using MS-DOS Client with ODI Stack

	Article: Q155555
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the SNA Server MS-DOS Client using Novell's ODI IPX/SPX protocol
	stack and the SNA Server DOS router to communicate with an AS/400, then SNA
	Server will log the following event prior to creating an SNA Server Dump file
	and Dr. Watson log:
	
	  Event 686 SNA server Internal Buffer pool error.
	  Reason = invalid owner id
	  Mdule = snabase. exe
	  Process = 132
	  Pool = trustedelts
	  details = current 9Eh expected 15EAh
	
	When you view the Dr. Watson log, there are faults logged against two services.
	
	  
	
	  Application exception occurred:
	  App: snaservr.DBG (pid=150)
	  When: 3/18/1996 @ 19:10:9.145
	  Exception number: c0000005 (access violation)
	
	  Application exception occurred:
	  App: snabase.DBG (pid=132)
	  When: 4/13/1996 @ 12:43:53.762
	  Exception number: 80000003 (hardcoded breakpoint)
	
	CAUSE
	=====
	
	The trap in SNASERVR.EXE occurs when the SNA Server buffer pool becomes
	corrupted. In this case, the corruption occurs because the client is sending a
	10-byte frame to the SNA Server when it was expecting a 47-byte frame. Because
	the incoming frame was smaller than expected, SNA Server fills it in with zeroes
	or EBCDIC spaces that cause the buffer pool to become corrupted. The trap in
	SNABASE.EXE results because of the preceding trap in SNASERVR.EXE.
	
	RESOLUTION
	==========
	
	The IPX/SPX transport now verifies that the incoming message length is valid. If
	the length is invalid, the message is ignored and an event 631 is logged.
	Microsoft has updated the <snaroot>\snanw.dll file on both the SNA Server
	and the client to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
