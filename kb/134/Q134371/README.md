---
layout: page
title: "Q134371: SMTP: Loss of Available Free Memory During Operation"
permalink: /kb/134/Q134371/
---

## Q134371: SMTP: Loss of Available Free Memory During Operation

	Article: Q134371
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During operation of the SMTP gateway, the available memory can unexpectedly
	decrease, and eventually it will interfere with the ability of the gateway to
	process mail.
	
	CAUSE
	=====
	
	Memory loss can occur if an incoming message contains two subject lines. Memory
	allocated for the first subject is not released after processing the message.
	
	If you stop and restart the gateway, it will restore the free memory pool. The
	-BR option can be used to stop the gateway after a designated period of time.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96126 SMTP: Error in Documentation for -BR Parameter
	
	NOTE: You can restart the gateway through a batch file that calls itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0.9 of the Microsoft
	Mail Gateway to SMTP. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Contact
	Microsoft Product Support Services for more information on the availability of
	this fix.
	
	
	MORE INFORMATION
	================
	
	Ordinarily a message will have only one subject, and when the second subject
	occurs, the memory allocated for the first subject is not released. The memory
	allocated for the subject is generally less than 40 bytes, but the position of
	the memory can fragment the free memory pool and result in failures when it
	attempts to allocate additional memory.
	
	For additional information on how to observe the free memory during the gateway
	operation, please see the following article in the Microsoft Knowledge Base:
	
	  Q108374 SMTP: How to Find Available Memory
	
	Additional query words: 3.00.9 QFE483 heap header
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
