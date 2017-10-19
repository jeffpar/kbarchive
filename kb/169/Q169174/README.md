---
layout: page
title: "Q169174: XFOR: IMS Halts If RFC821 Address Over 1KB in Size Is Received"
permalink: /kb/169/Q169174/
---

## Q169174: XFOR: IMS Halts If RFC821 Address Over 1KB in Size Is Received

	Article: Q169174
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Service may access violate if it receives
	an RFC 821 address that is syntactically invalid and is over 1 KB in size.
	
	CAUSE
	=====
	
	There is a buffer overflow in the Msexcimc.exe file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
