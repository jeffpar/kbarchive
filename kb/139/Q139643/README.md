---
layout: page
title: "Q139643: XADM: Error Writing Log Information to SA"
permalink: kb/139/Q139643/
---

## Q139643: XADM: Error Writing Log Information to SA

	Article: Q139643
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages appear in the Application Event log:
	
	  Event ID:2011
	  Source:MSExchangeIS
	  Type:Error
	  Category:Transport
	  Description:
	  Error 0x80040115 occurred while writing delivery log information to the
	  Microsoft Exchange System Attendant
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Message Transfer Agent (MTA) might fail to move messages
	and have difficulty communicating with the Microsoft Exchange System Attendant
	(SA) service. The CPU utilization displayed by Performance Monitor might be high
	due to repeated attempts to allocate memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
