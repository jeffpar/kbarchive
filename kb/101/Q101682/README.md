---
layout: page
title: "Q101682: SMTP: Err Msg: ERROR: network_read: timed out"
permalink: kb/101/Q101682/
---

## Q101682: SMTP: Err Msg: ERROR: network_read: timed out

	Article: Q101682
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Gateway to SMTP may display this message:
	
	  ERROR network_read: timed out
	  ERROR SMTP_get_response:getline () <=0
	  [tx] Quit
	  ERROR network_read: timed out
	  ERROR SMTP_get_response:getline () <=0
	  SMTP_close (socket=257)
	  NC_incoming:system error
	
	This indicates that the SMTP gateway was unable to complete the message transfer
	to the smarthost configured in the Administrator program (Gateway-SMTP-SETUP:
	"IP address of SMTP Router"). This error message may appear in these
	situations:
	
	- The smart host goes down.
	
	-or-
	
	- The network between the SMTP gateway computer and the smarthost is down.
	
	You can test these trouble points by trying to PING the smarthost or doing a
	TELNET to port 25 of the smarthost. Once this test is successful, the gateway
	will run. For example
	
	  PING 123.123.12.1
	  TELNET 123.123.12.1 25
	
	where 123.123.12.1 is the IP address of the smarthost.
	
	If this error message occurs frequently, check the network with a protocol
	analyzer for problems.
	
	Additional query words: 2.10 3.00 ERRMSG smart host
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
