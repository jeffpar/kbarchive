---
layout: page
title: "Q100707: SMTP: Err Msg: Write: (57) Socket is Not Connected"
permalink: kb/100/Q100707/
---

## Q100707: SMTP: Err Msg: Write: (57) Socket is Not Connected

	Article: Q100707
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display this error
	message:
	
	  ERROR write: (57) Socket is not connected
	
	CAUSE
	=====
	
	This indicates that the SMTP Gateway program tried to pass information to the
	TCP/IP layer, which did not accept the information.
	
	RESOLUTION
	==========
	
	To resolve this problem, restart the Gateway computer to clear out all
	connection information from the TCP/IP stack. If this happens frequently, check
	with the TCP/IP vendor.
	
	Additional query words: 2.10 3.00 DocErr errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
