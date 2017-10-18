---
layout: page
title: "Q194139: XFOR: SNADS to Exchange Service Perfmon Counters don't Update"
permalink: kb/194/Q194139/
---

## Q194139: XFOR: SNADS to Exchange Service Perfmon Counters don't Update

	Article: Q194139
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Total Transaction Bytes counter for the SNADS to Exchange Service does not
	update its count, and remains at zero. In addition, the Non-delivery Reports
	From SNADS counter in Performance Monitor (Perfmon) also reads a zero count.
	
	The Total Transaction Bytes counter for SNADS in the Perfmon is a counter meant
	to monitor the number of bytes that have been handled by the SNADS to Exchange
	Transform Service. It complements the Transaction Count counter which monitors
	the number of messages that have been handled by the Service going from SNADS to
	Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: Total Transaction Bytes, Non-delivery Reports, ECA Service Manager, Perfmon,
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
