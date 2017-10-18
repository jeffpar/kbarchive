---
layout: page
title: "Q157010: XADM: Exception In Dsamain.exe After Network Error"
permalink: kb/157/Q157010/
---

## Q157010: XADM: Exception In Dsamain.exe After Network Error

	Article: Q157010
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Directory service (DS) might terminate unexpectedly with
	the following Event ID:
	
	  Event ID:    1171
	  Source:      MSExchangeDS
	  Type:        Error
	  Category:    Internal Processing
	  Description: Exception c0000005 has occurred with parameters 6df47c48
	               and 0 (Internal ID 10c009b). Please contact Microsoft
	               Product Support Services for assistance.
	
	CAUSE
	=====
	
	After encountering a network error, the DS tries to delete an object that no
	longer exists.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
