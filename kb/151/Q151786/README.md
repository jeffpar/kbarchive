---
layout: page
title: "Q151786: XFOR: Schedule+ Meeting Requests Drop the When Field"
permalink: /kb/151/Q151786/
---

## Q151786: XFOR: Schedule+ Meeting Requests Drop the When Field

	Article: Q151786
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Schedule+ version 1.0 to invite a cc:Mail user to a meeting, the
	"When" information is not received in the meeting invitation. However if a
	Schedule+ version 7.0 user sends an invitation, the When information is
	successfully received.
	
	CAUSE
	=====
	
	Unlike Schedule+ version 7.0, Schedule+ version 1.0 does not include the When
	information in the message body. Schedule+ 1.0 only places it in the MAPI 0
	property, which the MS Mail Connector Interchange maps to the corresponding MAPI
	1 property.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
