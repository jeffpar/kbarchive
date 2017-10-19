---
layout: page
title: "Q98067: SMTP: Explanation of FROM Field wit"
permalink: /kb/098/Q98067/
---

## Q98067: SMTP: Explanation of FROM Field wit

	Article: Q98067
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
	
	If a message cannot be successfully delivered, the Microsoft Mail Gateway to
	SMTP or Microsoft Mail may generate a message from
	"Network/Postoffice/Postmaster," advising the sender of a problem.
	
	These messages can sometimes get bounced back and forth between Microsoft Mail
	and the SMTP environment if the sender or recipient names are invalid. To stop
	this bouncing phenomenon, (also called looping or ping-pong) the SMTP Gateway
	replaces "Network/Postoffice/Postmaster" with "<>" (Greater- than and
	Less-than signs).
	
	The message is not returned to the Microsoft gateway because the SMTP host does
	not have a valid address to send the mail message back to; it is sent to the
	administrator for the Microsoft gateway.
	
	Example
	-------
	
	OUTGOING MESSAGES:
	
	If an outgoing message is from:
	
	  Network/Postoffice/Postmaster
	
	The SMTP Gateway replaced it with:
	
	  <>
	
	INCOMING MESSAGES:
	
	If an incoming message is from:
	
	  <>
	
	The SMTP Gateway replaced it with:
	
	  Network/Postoffice/Postmaster
	
	Additional query words: 3.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
