---
layout: page
title: "Q141970: XCON: Exchange Unresponsive If Message Subject Has 0xD"
permalink: /kb/141/Q141970/
---

## Q141970: XCON: Exchange Unresponsive If Message Subject Has 0xD

	Article: Q141970
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange MS Mail Connector (Apple Talk) Message Transfer Agent
	(MTA) will over utilize the CPU when processing a message with a subject that
	contains 0xD. This will cause the Microsoft Exchange Server to become
	unresponsive.
	
	MORE INFORMATION
	================
	
	AT Mail does not allow users to have 0xD in the subject line but some gateways
	to AT Mail do.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
