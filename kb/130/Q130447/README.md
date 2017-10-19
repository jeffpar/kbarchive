---
layout: page
title: "Q130447: FAX: Err Msg: &quot;Failure to Submit Fax!&quot; on Every Faxout Cycle"
permalink: /kb/130/Q130447/
---

## Q130447: FAX: Err Msg: &quot;Failure to Submit Fax!&quot; on Every Faxout Cycle

	Article: Q130447
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message occurs repeatedly on the gateway screen and is repeatedly
	written to the FAXGATE.LOG file:
	
	  Failure to submit fax! Receiver <phone #>
	
	The message is not returned to the user as undeliverable. The header for the
	message remains in the fax queue until it is deleted or returned through the
	ADMIN.EXE program.
	
	This message is related to a specific fax mail item. Other fax messages can
	continue to be sent through the gateway.
	
	CAUSE
	=====
	
	This situation can occur when a fax mail item has an attachment that the CAS
	driver rejects during submission. The program does not count this as a retry
	attempt and the attempted submission continues on every faxout cycle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0.1 of Microsoft Mail
	Gateway to Fax. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Microsoft Mail Gateway to Fax "Administrator's Guide" explains this error in
	Appendix A on page 105, as follows:
	
	  ... you need to use the Administrator Queue option to return or delete the
	  fax items.
	
	Just returning or deleting the item from the queue is not enough to stop the
	message. Even after returning the message from the queue, the error message will
	continue. To stop the message, you must stop and restart the gateway. To avoid
	lockups of the gateway, stop the gateway before it returns Fax gateway items
	from the queue. After the failing item is returned or deleted, restart the
	gateway.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
