---
layout: page
title: "Q123748: SNA Server Err Msg: Event 23, Outage Code &quot;2D&quot; (Abnormal Resp.)"
permalink: /kb/123/Q123748/
---

## Q123748: SNA Server Err Msg: Event 23, Outage Code &quot;2D&quot; (Abnormal Resp.)

{% raw %}

	Article: Q123748
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft SNA Server Synchronous Data Link Control (SDLC) connection is
	configured with the Maximum BTU Size set to a value less than the maximum frame
	size of the remote system (set using the PU macro MAXDATA parameter in VTAM),
	the following SNA Server connection failure may be logged in the Windows NT
	application event log:
	
	  Event 23, Outage code "2D" (abnormal response)
	
	CAUSE
	=====
	
	The abnormal response error occurs if the host banner screen (that is, the
	USSTAB message 10 screen) exceeds the Maximum BTU size set in SNA Server.
	Because the maximum frame size is not negotiated until a BIND takes place, the
	SNA Server's maximum frame size can be exceeded.
	
	RESOLUTION
	==========
	
	To correct this problem, change the SNA Server Maximum BTU size to match the
	value used on the remote system.
	
	NOTE: If an IBM SDLC adapter or MicroGate SDLC adapter is being used with SNA
	Server, the maximum frame size supported by Microsoft SNA Server is 521. Other
	SDLC adapters do not have this restriction.
	
	Additional query words: ntprotocol prodsna configured
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
