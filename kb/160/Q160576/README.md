---
layout: page
title: "Q160576: 3270 Sessions Unexpectedly Return to SSCP Screen"
permalink: /kb/160/Q160576/
---

## Q160576: 3270 Sessions Unexpectedly Return to SSCP Screen

	Article: Q160576
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server clients using 3270 display sessions are returned to the SSCP (VTAM
	Signon) screen unexpectedly while actively working in a host application. The
	SNA Server may log one or more of the following events in the Windows NT
	Application Event Log when this problem occurs:
	
	  Event ID: 4
	  Source: SNA Server
	  Description: (1133) Message Sequence Error
	
	  EXPLANATION
	  The SNA server (node) received an invalid or unexpected message from a
	  remote node on an SNA session. The remote system has a possible
	  configuration or internal logic error.
	
	  SUBCODE INFORMATION
	  X'1133' The node received a request with an invalid sequence number.
	
	  Event ID: 12
	  Source: SNA Server
	  Description: (1118) Negative Response from Remote System (SENSE = 200D)
	
	  SUBCODE INFORMATION
	  X'1118' The local SNA server (node) received an SNA negative response
	  on an SNA session from a remote system, which indicates a protocol
	  violation by the 3270 emulator. The SNA sense code shown gives details
	  of the type of error. See "IBM Systems Network Architecture: Formats"
	  for an explanation of the sense code.
	
	  Event ID: 13
	  Source: SNA Server
	  Description: (1141) Message Sequence Error (SENSE = 2001)
	
	  EXPLANATION
	  The SNA server (node) received an invalid or unexpected message from a
	  remote node during an SNA session. The cause is probably a logic error
	  in the remote system. The SNA sense data shown gives details of the type
	  of error.
	
	  SUBCODE INFORMATION
	  X'1141' Session-level protocol violation in an SNA message from the
	  partner
	  LU.
	
	CAUSE
	=====
	
	This has only been reported on SNA Servers with 802.2 connections to IBM 3174
	Control Units on Ethernet networks. The problem occurs because a 3174 Ethernet
	gateway may send a duplicate SNA sequence number to the SNA Server when the 3174
	is handling an SNA frame between 1490 and 1493 bytes in size. This leads to a
	condition where a frame may be re-sent by the 3174 causing the symptoms
	discussed previously. In addition, the problem only occurs if the 3174 is
	running 3174 Microcode Level C6.1 or C6.2.
	
	RESOLUTION
	==========
	
	A fix for this problem is available from IBM. Contact IBM support and request
	IBM 3174 PTR #B27E.
	
	MORE INFORMATION
	================
	
	For information about how to contact IBM, query in the Knowledge Base for one of
	the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
