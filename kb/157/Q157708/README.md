---
layout: page
title: "Q157708: XADM: MTA Error 9405"
permalink: /kb/157/Q157708/
---

## Q157708: XADM: MTA Error 9405

	Article: Q157708
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following error reported by the Microsoft Exchange Server
	Message Transfer Agent (MTA):
	
	  Event #9405 An unexpected error has occurred which may cause the MTA to
	  terminate.
	  Error: Exception c0000005 occurred at address 2031561 [BASE KERNEL, 27] (16)
	
	CAUSE
	=====
	
	One of the causes of this error is a timing error occuring during a connection
	attempt. The MTA sends a connection request at the transport layer, and may
	receive a connection confirm for the transport layer before the MTA has prepared
	the connection at the session layer (CN SPDU).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0.
	
	This problem was corrected in the latest Microsoft Exchange 4.0 Server U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	This timing issue was resolved by readying the session layer connection request
	(CN SPDU) before sending the connection request for the transport layer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
