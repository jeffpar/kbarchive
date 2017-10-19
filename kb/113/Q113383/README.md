---
layout: page
title: "Q113383: X400: Non-Delivery and Confirmed-Delivery Notification"
permalink: /kb/113/Q113383/
---

## Q113383: X400: Non-Delivery and Confirmed-Delivery Notification

	Article: Q113383
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When it builds an X.400 message, the Microsoft Mail Gateway to X.400 always sets
	the P1 per-recipient flag to request basic non-delivery notification for the
	originator.
	
	If the originator requests return receipt notification, the X.400 gateway sets
	the P1 flag to request:
	
	- basic non-delivery (message could not be delivered)
	
	- confirmed-delivery (message has been delivered)
	
	- confirmed-read (recipient has opened message)
	
	Confirmed-read notification always accompanies confirmed-delivery.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
