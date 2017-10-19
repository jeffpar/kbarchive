---
layout: page
title: "Q166567: XCON: How to Enable Lowest Cost Routes Only"
permalink: /kb/166/Q166567/
---

## Q166567: XCON: How to Enable Lowest Cost Routes Only

	Article: Q166567
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server versions 4.0 and 5.0 use certain criteria for routing.
	A new feature is planned for Microsoft Exchange Server that will allow cost to
	be the first determining factor in routing criteria.
	
	MORE INFORMATION
	================
	
	Once you have applied the update referenced below, the location of the new
	registry entry is as follows:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/ 
	  MSExchangeMTA/Parameters
	
	To enable this feature:
	
	1. Add the following value:
	
	     Use Lowest Cost Routes Only
	
	2. Set the Data Type to REG_DWORD.
	
	3. Set this to a non-zero value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	This feature is included in the latest Microsoft Exchange Server version 5.0 U.S.
	Service Packs. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	In Exchange Server version 5.5, this functionality has been included and can be
	changed in the Exchange Administrator program on the Message Transfer Agent
	(MTA) object. Place a check in the box for Only Use Least Cost Routes.
	
	If you upgrade to Exchange Server version 5.5, it will be necessary to delete the
	previous registry entry before making the above change.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
