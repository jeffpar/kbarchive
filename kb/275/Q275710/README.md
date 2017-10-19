---
layout: page
title: "Q275710: TN3270 Does Not Handle CD Field Properly During Error Recovery"
permalink: /kb/275/Q275710/
---

## Q275710: TN3270 Does Not Handle CD Field Properly During Error Recovery

	Article: Q275710
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server may log several event 21 errors in the application event log. The
	first event 21 error contains a subcode of X'1124' and a sense code of 1003:
	
	  EventID : 21
	  Source : SNA Server
	  Description : (1124) Negative Response Sent on Connection TESTCONN (SENSE =
	  1003)
	  Explanation : SUBCODE INFORMATION:
	  X'1124' A negative response was sent and logged. This error normally follows a
	  more specific error message, depending on the type of negative response sent
	  and its cause. The SNA sense data provides details about the type of error.
	  ACTION:
	  See "IBM Systems Network Architecture: Formats" for an explanation of the
	  sense data.
	
	The subsequent entries contain a subcode of X'1124' and sense code 2004:
	
	  EventID : 21
	  Source : SNA Server
	  Description : (1124) Negative Response Sent on Connection TESTCONN (SENSE =
	  2004)
	  Explanation : SUBCODE INFORMATION:
	  X'1124' A negative response was sent and logged. This error normally follows a
	  more specific error message, depending on the type of negative response sent
	  and its cause. The SNA sense data provides details about the type of error.
	  ACTION:
	  See "IBM Systems Network Architecture: Formats" for an explanation of the
	  sense data.
	
	These errors indicate that SNA Server has sent negative responses to the host
	system in response to incoming host requests.
	
	CAUSE
	=====
	
	An incoming request that is from a host system may have the change direction
	(CD) bit set, which indicates that direction should be given to the client
	system. However, if the client responds negatively to the host request (which
	causes the X'1003' negative response to be sent to the host), direction is then
	supposed to be determined by the recovery responsibility information in the
	BIND. When these circumstances occur, the TN3270 Service, in some cases,
	incorrectly interprets that direction should be given to the client system, even
	though the BIND indicates that direction should be given to the host system in
	recovery situations. When the next request is then sent down from the host
	system, the TN3270 Service believes that the client, not the host, is in a send
	state, and therefore returns a negative response with the X'2004' direction
	error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
