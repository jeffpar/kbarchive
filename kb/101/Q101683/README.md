---
layout: page
title: "Q101683: X400: Err Msg: ERROR 3 (Network): X.25 Receive Failed..."
permalink: /kb/101/Q101683/
---

## Q101683: X400: Err Msg: ERROR 3 (Network): X.25 Receive Failed...

	Article: Q101683
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to X.400 may generate this network error message:
	
	  ERROR 3 (Network): X.25 receive failed on connection x:
	
	CAUSE
	=====
	
	An error occurred while the gateway was receiving a Protocol Data Unit (PDU)
	through X.25. The gateway or the remote MTA will try again.
	
	This error occurs if the X.25 connection is broken while the X.400 gateway MTA is
	receiving a message. If the disconnection occurs before the complete message is
	received, the partially received message is deleted. It is up to the sending MTA
	to send the entire message again.
	
	Additional query words: 3.20 errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
