---
layout: page
title: "Q115438: X400: Delivery Fails when Message Has Too Many TO: Recipients"
permalink: /kb/115/Q115438/
---

## Q115438: X400: Delivery Fails when Message Has Too Many TO: Recipients

{% raw %}

	Article: Q115438
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message has more TO: recipients than the MTA can process, the system
	logs:
	
	  ERROR 1025 (allocating memory): allocating memory
	
	Some recipients presumably will not get the message, but the originator receives
	no indication of this.
	
	Note: The number 1025 above refers to the number of bytes requested from
	memalloc(); it is not an error code per se.
	
	CAUSE
	=====
	
	No message is sent, so there is no possibility of some (X.400) recipients
	getting the message and some not. And the sender does get a mail failure report.
	It's not clear where the point of failure is.
	
	The gateway uses more memory when translating the message from MSMail to
	X400\OUTGOING than when sending the message from \x400\outgoing to the external
	MTA, which implies that the gateway fails when translating the message to X.400.
	
	RESOLUTION
	==========
	
	The FROM and SUBJECT fields of failed messages now are logged as WARNING
	messages so the Administrator can easily spot a problem message and dequeue the
	mail.
	
	An initial failure to deliver the same message still causes the loop with "ERROR
	allocating memory," but after a reboot the gateway logs the SUBJECT and FROM
	information about the problem message in the X400xxx.LOG file, tries three times
	to deliver the message, then deletes it and makes an entry in the SYSTEM.LOG
	file:
	
	  Failure to queue diagnostic back to sender, unknown error
	
	The originator receives no indication of the failure.
	
	
	The README recommends at least 400K free RAM for gateway operation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
