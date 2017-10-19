---
layout: page
title: "Q99857: SMTP: Err Msg: ERROR Write: (1) (null)"
permalink: /kb/099/Q99857/
---

## Q99857: SMTP: Err Msg: ERROR Write: (1) (null)

	Article: Q99857
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display this error
	message:
	
	  "ERROR write: (1) (null)"
	
	This error message indicates that the SMTP Gateway was unable to send packets to
	the SMTP router configured in the Admin program. It should be configured in this
	manner:
	
	Gateway-SMTP-SETUP:
	
	  IP address of SMTP Router
	
	CAUSE
	=====
	
	This error message may appear if:
	
	- The SMTP router goes down.
	
	- The network between the SMTP gateway computer and the SMTP router is down.
	
	- A problem occurs in the TCP/IP on the gateway computer.
	
	RESOLUTION
	==========
	
	You can test these trouble points by trying to "telnet" to port 25 of the
	smarthost. Once this test is successful, the gateway will run. Send the message
	again. If the error occurs frequently, check the network with a protocol
	analyzer for problems.
	
	Additional query words: 2.10 3.00 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
