---
layout: page
title: "Q166600: XCON: Message Subject Lost When Sending to SP3 Exchange Server"
permalink: /kb/166/Q166600/
---

## Q166600: XCON: Message Subject Lost When Sending to SP3 Exchange Server

	Article: Q166600
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A message subject may be lost when you are sending to a computer running
	Microsoft Exchange Server 4.0 Service Pack 3 or earlier from a computer running
	Microsoft Exchange Server version 5.0 or Microsoft Exchange Server version 4.0
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	This happens when the X.400 Connector is configured to not send MDBEF. The Allow
	Exchange Content option is not selected in the Advanced Configuration tab of the
	X.400 Connector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
