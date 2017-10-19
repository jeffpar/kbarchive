---
layout: page
title: "Q182798: XADM: Routing Calculation Fails Across Entire Organization"
permalink: /kb/182/Q182798/
---

## Q182798: XADM: Routing Calculation Fails Across Entire Organization

	Article: Q182798
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you add a new connector to an Exchange site and recalculate the routing
	(<org>/<site>/Configuration/Site Addressing/Routing), you may find
	that the routing table does not reflect the changes that you have made. This
	problem can affect all sites within the organization. The Windows NT event log
	still reports that the routing was successfully updated:
	
	  Event ID : 5000
	  Source : MSExchangeSA
	  Description : Recalculation of the routing table is complete.  Result:
	  The operation has completed successfully.
	
	CAUSE
	=====
	
	An invalid address space was entered on a connector, which caused the routing
	calculation to ignore subsequent connectors.
	
	The syntax for address spaces on a connector is checked when the connector is
	created in the Exchange Administrator program. However, in Exchange 4.0 SP4 and
	Exchange 5.0, a mechanism to restrict the scope of an address space was
	introduced. Using a LOCAL address space bypasses the syntax checking, so
	therefore it is possible to add an invalid address space. The Administrator
	program in Exchange 5.5 has been modified so that the scope of the address space
	can be set without having to use the LOCAL method, although this can still be
	used.
	
	For more information on LOCAL routes, please see Knowledge Base article Q161947,
	"XCON: MTA: Address Space Replication with LOCAL Address Spaces."
	
	WORKAROUND
	==========
	
	To work around this issue, do the following. First, examine the address spaces
	for all connectors, paying particular attention to those added using the LOCAL
	syntax. Examples of invalid syntax entered are:
	
	  Type : LOCAL
	  Address : X400:c=XX;a=VOID
	
	The above address is invalid, because for LOCAL address spaces the delimiter
	needs to be a comma instead of the usual semi-colon.
	
	  Type : LOCAL
	  Address : X400:c=MyCountry, a=*
	
	This is invalid because "MyCountry" is not a valid country code.
	
	Remove the invalid address spaces and then recalculate the routing. You will find
	that the routes for new connector will now appear in the routing table.
	
	For more complicated Exchange configurations with many connectors, it may not be
	easy to examine every connector in the organization. In these cases, use the
	hotfix described below. This ignores the invalid address spaces and fully
	recalculates the routing for the Exchange site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: GWART RID routing
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
