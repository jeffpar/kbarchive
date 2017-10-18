---
layout: page
title: "Q258252: TN5250 Fails to Issue RECEIVE_AND_WAIT"
permalink: kb/258/Q258252/
---

## Q258252: TN5250 Fails to Issue RECEIVE_AND_WAIT

	Article: Q258252
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TN5250 clients may stop responding when they are connected to an AS/400 computer
	through the SNA Server TN5250 server. The exact symptoms that occur with the
	TN5250 emulator may vary depending on the emulator being used. However, usually
	the emulator's keyboard is locked when it is waiting for additional data from
	the AS/400.
	
	CAUSE
	=====
	
	This problem can occur when an AS/400 sends data indicating that the TN5250
	server now has direction to send, followed immediately by a REQUEST_TO_SEND. The
	REQUEST_TO_SEND notification is received by the TN5250 server through a
	TEST_RTS_AND_POST post completion before the RECEIVE_AND_WAIT verb completes
	with a "what_rcvd" parameter, indicating that the TN5250 server has direction to
	send. The TN5250 server ignores the TEST_RTS_AND_POST completion and moves into
	SEND state when the RECEIVE_AND_WAIT verb completes, which means that it does
	not issue a new RECEIVE_AND_WAIT verb. The TN5250 server is not able to receive
	any more data for this TN5250 session because it does not issue a new
	RECEIVE_AND_WAIT verb. The end result is that the TN5250 client stops responding
	because it is expecting to receive additional data from the AS/400.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The TN5250 server has been updated so that it no longer ignores the
	TEST_RTS_AND_POST completion when it completes before a RECEIVE_AND_WAIT verb
	completes. The TN5250 server now posts a new RECEIVE_AND_WAIT verb, so that it
	can receive the additional data from the AS/400.
	
	The following annotated TN5250 traces demonstrate the problem described in this
	article:
	
	  The following two messages were captured through TN5250 LU6.2 Message
	  traces:
	
	  
	
	  PVI   0502E0B1->1D1F0001 LU 6.2   
	  PVI                      MSGID:RDAT   MSGTYP:PRFLS  
	  PVI   
	  PVI   ---- Header  at address 041B77B0, 1 elements ----
	  PVI   01050000 00002C00 0101FDFF 0100AE00     <......,.........>
	  PVI   
	  PVI   ---- Element at address 04BA87C4, start 13, end 22 ----
	  PVI   000A12A0 00000400 000C                  <..........      >
	
	  This message contains 10 bytes of data sent by an AS/400 to a TN5250 client.
	  The AS/400 also indicates that the TN5250 server has direction to send:
	
	  
	
	  PVI   0502E0B1->1D1F0001 LU 6.2   
	  PVI                      MSGID:RRTS   MSGTYP:?????  
	  PVI   
	  PVI   ---- Header  at address 041B75DC, 0 elements ----
	  PVI   04000000 00002C00 DA010000 0100AE00     <......,.........>
	
	  This message is a REQUEST_TO_SEND notification from the AS/400. The AS/400 is
	  notifying the TN5250 server that it has more data to send. According to the
	  time stamps in the traces, the previous two messages were received by the
	  TN5250 server at approximately the same time.
	
	  The following trace data was captured in matching TN5250 APPC API traces:
	
	  
	
	  APPC  TEST_RTS_AND_POST response, result = OK
	  APPC  
	  APPC  Type:Async   Method:Post   Hwnd:00000000   VerbID:000F4000
	  APPC  
	  APPC  ---- Verb Parameter Block at address 00233C70 ----
	  APPC  81000000 00000000 00000000 00000000     <a...............>
	  APPC  B0482400 A0492400 01000000 00000000     <.H$..I$.........>
	
	  The TN5250 server receives notification of the REQUEST_TO_SEND through the
	  post-completion of an outstanding TEST_RTS_AND_POST verb. This is processed
	  prior to the completion of the following RECEIVE_AND_WAIT verb:
	
	  
	
	  APPC  RECEIVE_AND_WAIT request
	  APPC  
	  APPC  Type:Async   Method:CB     Addr:0102AAA1   VerbID:00154000
	  APPC  
	  APPC  ---- Verb Parameter Block at address 00233D0C ----
	  APPC  0B000000 00000000 00000000 00000000     <................>
	  APPC  B0482400 A0492400 00000101 00000010     <.H$..I$.........>
	  APPC  00000000 74453101 00000000 00000000     <....tE1.........>
	  APPC  
	
	  APPC  RECEIVE_AND_WAIT response, result = OK
	  APPC  
	  APPC  Type:Async   Method:CB     Addr:0102AAA1   VerbID:00154000
	  APPC  
	  APPC  ---- Verb Parameter Block at address 00233D0C ----
	  APPC  0B000000 00000000 00000000 00000000     <................>
	  APPC  B0482400 A0492400 01020101 00000010     <.H$..I$.........>
	  APPC  0A000000 74453101 00000000 00000000     <....tE1.........>
	  APPC  ---- Data at address 01314574 ----
	  APPC  000A12A0 00000400 000C                  <..........      >
	
	  The RECEIVE_AND_WAIT verb completes as the 10 bytes of data from the AS/400 is
	  received.
	
	  At this point, the TN5250 server ignores the post completion of an outstanding
	  TEST_RTS_AND_POST verb. Under normal circumstances, a new RECEIVE_AND_WAIT
	  verb is issued when a TEST_RTS_AND_POST post completion occurs. In this case,
	  the TN5250 server does not post a new RECEIVE_AND_WAIT, therefore it is
	  unable to receive any additional data from the AS/400 over this session
	  because the TN5250 server is now in a SEND state due to the completion of the
	  previous RECEIVE_AND_WAIT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
