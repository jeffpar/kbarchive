---
layout: page
title: "Q176181: XCON: NDRs Dropped on Message to Recipient w/ Multiple DDAs"
permalink: /kb/176/Q176181/
---

## Q176181: XCON: NDRs Dropped on Message to Recipient w/ Multiple DDAs

	Article: Q176181
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you submit a message to a recipient address that contains multiple DDA
	pairs, any non-delivery report (NDR) that may occur for the message will be
	discarded by the Store. An example of an address which meets this criteria is as
	follows:
	
	  C=<country code>;A=<admd>;P=<prmd>;O=<organization>;
	  DDA:RFC822=User@domain.com;DDA:MSXCX500=C=<country code>;A=<admd>;
	  P=<prmd>;O=<organization>;OU=<organizational unit>;CN=User
	
	CAUSE
	=====
	
	As in the above example, the DDA pairs are defined in the following order:
	
	  DDA1 type, DDA1 value, DDA2 type, DDA2 value
	
	However, when parsing the address, the order was assumed as DDA1 type, DDA2 type,
	DDA1 value, DDA2 value. As such, a failure occurs upon parsing of the address
	when more than 1 DDA is present.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
