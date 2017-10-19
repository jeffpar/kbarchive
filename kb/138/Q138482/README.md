---
layout: page
title: "Q138482: Windows NT Telnet Client Does Not Support SNA Server TN3270"
permalink: /kb/138/Q138482/
---

## Q138482: Windows NT Telnet Client Does Not Support SNA Server TN3270

	Article: Q138482
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Telnet Client does not support SNA Server TN3270 connectivity.
	
	MORE INFORMATION
	================
	
	The following TN3270 trace information shows a computer attempting to connect as
	a VT100 terminal type (The Windows NT Telnet client supports VT100, VT52,
	DEC-VT52, ANSI, DEC-VT100, VT100). This is not a supported TN3270 server
	terminal type. Refer to the chart below in this article for a list of currently
	supported terminal types.
	
	10/19 07:48:45.733 (+ smidgen )  Event=TEV_DataFromClient
	Thread = 0x00000105  Session = 0x0016B6D0  Socket = 0x0000018C
	000000  fffa 1800 7674 3130 30ff f0              !....vt100..     !
	
	Here the TN3270 Server is sending a negotiation error back to the client and
	terminating the session.
	
	>10/19 07:48:46.004 (+ smidgen )  Event=TEV_TCPSendIssued
	Thread = 0x00000105  Session = 0x0016B6D0  Socket = 0x0000018C
	Number of bytes = 104
	000000  0d0a 544e 3332 3730 2053 6572 7669 6365  !..TN3270 Service!
	000010  2045 7272 6f72 2035 3131 0d0a 0d0a 5465  ! Error 511....Te!
	000020  6c6e 6574 206e 6567 6f74 6961 7469 6f6e  !lnet negotiation!
	000030  2066 6169 6c75 7265 3a20 2063 6c69 656e  ! failure:  clien!
	000040  7420 6469 6420 6e6f 7420 7365 6e64 2054  !t did not send T!
	000050  4e33 3237 3020 7465 726d 696e 616c 2074  !N3270 terminal t!
	000060  7970 652e 0d0a 0d0a                      !ype.....
	
	>10/19 07:48:48.006 (+  2 secs )  Event=TEV_SessionTermination
	Thread = 0x00000105  Session = 0x0016B6D0  Socket = 0x0000018C
	Session terminated
	
	Trace files contain records of internal activities on the TN3270 Service. These
	files describe events leading up to a difficulty and the exact state of the
	system when the difficulty occurred. Trace files are created when TN3270 Service
	tracing is enabled and then stored in the TRACES subdirectory of the TN3270
	Service root directory with the filename extension TRC.
	
	The following table describes the IBM terminal types supported by TN3270
	Service.
	
	Terminal Name   Primary Model   Alternative Model   Query Support
	-------------   -------------   -----------------   -------------
	IBM-3275-2      Model2          None                NO
	IBM-3276-2      Model2          None                NO
	IBM-3277-2      Model2          None                NO
	IBM-3278-2      Model2          None                NO
	IBM-3278-2-E    Model2          None                YES
	IBM-3279-2      Model2          None                YES
	IBM-3279-2-E    Model2          None                YES
	IBM-3276-3      Model2          Model3              NO
	IBM-3278-3      Model2          Model3              NO
	IBM-3278-3-E    Model2          Model3              YES
	IBM-3279-3      Model2          Model3              YES
	IBM-3279-3-E    Model2          Model3              YES
	IBM-3276-4      Model2          Model4              NO
	IBM-3278-4      Model2          Model4              NO
	IBM-3278-4-E    Model2          Model4              YES
	IBM-3279-4      Model2          Model4              YES
	IBM-3279-4-E    Model2          Model4              YES
	IBM-3278-5      Model2          Model5              NO
	IBM-3278-5-E    Model2          Model4              YES
	IBM-3279-5      Model2          Model4              YES
	IBM-3279-5-E    Model2          Model4              YES
	
	For SNA Server 3.0 and 4.0, there are 2 additional Terminal types supported:
	
	IBM-Dynamic
	IBM-3287-1 (Printing terminal type)
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	
