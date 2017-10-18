---
layout: page
title: "Q166609: XFOR: Unprotected Global Variables in MSMI"
permalink: kb/166/Q166609/
---

## Q166609: XFOR: Unprotected Global Variables in MSMI

	Article: Q166609
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	No definitive symptoms have been associated or observed with this condition, but
	theoretically could include access violations and\or Non- Delivery Reports
	(NDRs) being generated when the Microsoft Mail Interchange (MSMI) processes
	messages addressed to SNADS or PROFS recipients located via a downstream
	Microsoft Mail for PC Networks Gateway postoffice.
	
	CAUSE
	=====
	
	During MSMI initialization or refresh, two global strings sometimes change but
	are not protected during the change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest Microsoft Exchange Server
	version 5.0 U.S. Service Pack. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
