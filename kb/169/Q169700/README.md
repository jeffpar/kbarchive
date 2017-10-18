---
layout: page
title: "Q169700: XADM: Exception Error Receiving Message from PROFS/OV Connector"
permalink: kb/169/Q169700/
---

## Q169700: XADM: Exception Error Receiving Message from PROFS/OV Connector

	Article: Q169700
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The store may generate the following application exception when processing a
	message from a PROFS/OV connector version 1.38:
	
	  The application Store.exe generated an exception: access violation
	  (0xc0000005)
	
	CAUSE
	=====
	
	The exception occurs when a PROFS connector performs a SUBMIT MESSAGE. The PROFS
	message is sent to a non-existent mailbox or address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
