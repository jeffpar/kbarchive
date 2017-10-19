---
layout: page
title: "Q254662: Event ID 5: TN5250 Generates Dr. Watson with Fault in DbgBreakPo"
permalink: /kb/254/Q254662/
---

## Q254662: Event ID 5: TN5250 Generates Dr. Watson with Fault in DbgBreakPo

	Article: Q254662
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a TN5250 client attempts to connect, the client stops responding after the
	initial logon screen and successful user logon. On an SNA Server computer, the
	TN5250 Service stops responding, and then quits. It issues a Dr. Watson log with
	a FAULT in the DbgBreakPoint. The following event is posted in the Application
	event log:
	
	  
	
	  Event Type:	Error
	  Event Source:	SNA TN5250 Server
	  Event Category:	None
	  Event ID:	5
	  Date:		2/10/2000
	  Time:		1:03:51 PM
	  User:		N/A
	  Computer:	MISRENM108
	  Description:
	  The SNA TN5250 Service detected an internal error.
	
		File = e:\sna40\tn5250\spm\esaatran.c
		Line = 742
		Fail = FALSE
		Parm = 0x0
	
	All previously connected users are disconnected.
	
	Please review the "Cause" section of this article for information on how this
	issue can occur under a certain APPC conversation state.
	
	CAUSE
	=====
	
	The TN5250 Service issues a response to the AS/400. The TN5250 Service is in
	RECEIVE state:
	
	  
	
	  APPC  RECEIVE_AND_WAIT request
	  APPC
	  APPC  Type:Async   Method:CB     Addr:0102A3BE   VerbID:001A4000
	  APPC
	  APPC  ---- Verb Parameter Block at address 00233B38 ----
	  APPC  0B000000 00000000 00000000 00000000     <................>
	  APPC  90392400 803A2400 00000101 00000010     <.9$..:$.........>
	  APPC  00000000 74453101 00000000 00000000     <....tE1.........>
	
	The AS/400 returns with a RECEIVE_AND_WAIT response; however, the status is set
	to CONFIRM:
	
	  
	
	  APPC  RECEIVE_AND_WAIT response, result = OK
	  APPC
	  APPC  Type:Async   Method:CB     Addr:0102A3BE   VerbID:001A4000
	  APPC
	  APPC  ---- Verb Parameter Block at address 00233B38 ----
	  APPC  0B000000 00000000 00000000 00000000     <................>
	  APPC  90392400 803A2400 02020101 00000010     <.9$..:$.........>
	                       ^^^^
	  APPC  0A000000 74453101 00000000 00000000     <....tE1.........>
	  APPC  ---- Data at address 01314574 ----
	  APPC  000A12A0 00000400 000B                  <..........      >
	
	The AS/400 RECEIVE_AND_WAIT response from the AS/400 has set the what_rcvd data
	type to AP_DATA_COMPLETE_CONFIRM (as indicated above (^)) with the Conversation
	state set to CONFIRM. Because the TN5250 Service is now in a SEND state, it is
	unable to handle this reply, and then traps, issuing the Dr. Watson log.
	However, because the AS/400 APPC conversation is past the point of a sign-on
	screen, the AS/400 should not be sending the CONFRIM. The APPC conversation
	should be in an "exception response" mode only.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	As a result of correcting this TN5250 service trap issue, the CONFIRM verb is
	passed to the TN5250 emulator.
	
	
	If this occurred prior to the sign-on screen, the TN5250 emulator would have
	responded with the CONFIRM verb, which sends the contents of the local LUs send
	buffer and a confirmation request to the partner TP.
	
	For further information on APPC conversation with SNA Server, please review the
	APPC Programmer's guide included with the SDK and on the SNA Server CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
