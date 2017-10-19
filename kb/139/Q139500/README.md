---
layout: page
title: "Q139500: TN3270: Message Close Delay Option"
permalink: /kb/139/Q139500/
---

## Q139500: TN3270: Message Close Delay Option

	Article: Q139500
	Product(s): Microsoft Windows NT
	Version(s): 2.11 3.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TN3270 Server Administration program in SNA Server 2.11 and the Settings tab
	of the TN3270 Server Properties in SNA Server 3.0 allow the administrator to
	configure the "Message Close Delay" timer. This timer is used to close the
	TCP/IP connection between the client and server. The more information section
	gives an example where this option can be used.
	
	MORE INFORMATION
	================
	
	You can use the "Message Close Delay" timer to configure how quickly TN3270
	disconnects clients that have failed to negotiate successfully with the TN3270
	server, but have not yet closed their TCP/IP connection. This becomes important
	when you have hundreds of clients connecting and resources are limited.
	
	NOTE: Some TN3270 emulators wait until the TN3270 server closes the connection
	before returning control to the application. When this happens users have to
	wait until this timer expires before they can do anything.
	
	The following TN3270 server trace illustrates the default 10 second close delay
	timer. Note the 10 second time delay in handling the
	"Event=TEV_SessionTermination". For more information on TN3270 tracing refer to
	appendix B of the TN3270 Admin guide.
	
	>10/19 10:29:37.676 (+ smidgen )  Event=TEV_TCPSendIssued
	Thread = 0x00000128  Session = 0x001679E8  Socket = 0x00000080
	Number of bytes = 104
	000000  0d0a 544e 3332 3730 2053 6572 7669 6365  !..TN3270 Service!
	000010  2045 7272 6f72 2035 3131 0d0a 0d0a 5465  ! Error 511....Te!
	000020  6c6e 6574 206e 6567 6f74 6961 7469 6f6e  !lnet negotiation!
	000030  2066 6169 6c75 7265 3a20 2063 6c69 656e  ! failure:  clien!
	000040  7420 6469 6420 6e6f 7420 7365 6e64 2054  !t did not send T!
	000050  4e33 3237 3020 7465 726d 696e 616c 2074  !N3270 terminal t!
	000060  7970 652e 0d0a 0d0a                      !ype.....       !
	
	>10/19 10:29:37.676 (+ smidgen )  Event=TEV_SessionTermination
	Thread = 0x00000128  Session = 0x001679E8  Socket = 0x00000080
	Session waiting in termination state SESTERM_WaitingForMessageTimeOut
	
	>10/19 10:29:37.676 (+ smidgen )  Event=TEV_TCPSendCompleted
	Thread = 0x00000128  Session = 0x001679E8  Socket = 0x00000080
	Bytes transferred = 104
	
	>10/19 10:29:47.690 (+ 10 secs )  Event=TEV_SessionTermination
	Thread = 0x00000128  Session = 0x001679E8  Socket = 0x00000080
	Session terminated
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : 2.11 3.0
	
	=============================================================================
	
