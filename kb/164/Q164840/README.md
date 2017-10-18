---
layout: page
title: "Q164840: XFOR: NDRs Stay in MS Mail Connector Queue"
permalink: kb/164/Q164840/
---

## Q164840: XFOR: NDRs Stay in MS Mail Connector Queue

	Article: Q164840
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With the Japanese version of Microsoft Exchange Server, non-delivery reports
	(NDRs) stay in the Microsoft Mail Connector queue on the computer running
	Microsoft Exchange Server version 4.0 with Service Pack 3. These NDRs cannot be
	removed from Admin.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the Microsoft Mail user sends a mail message to an invalid e-mail address,
	and the message passes through the Microsoft Mail postoffice, Microsoft Mail
	Connector and Internet Mail Connector, this Microsoft Mail user receives an NDR.
	Even though the NDR is returned to the sender on Microsoft Mail postoffice from
	Internet Mail Connector, the NDR still stays in the Microsoft Mail Connector's
	queue. The following error events are reported in Event Viewer.
	
	  Event ID:2380
	  Source:MSExchangeMSMI
	
	  Event ID:2449
	  Source:MSExchangeMSMI
	
	When you try to remove this NDR from Admin.exe, following error message appears:
	
	  The object is not valid. Microsoft Exchange Administrator ID no: c1035b3c.
	
	Also, restarting the message transfer agent (MTA) causes the NDR to be delivered
	to the sender again. The NDR cannot be removed without resetting the MTA files.
	
	
	
	Additional query words: PO
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
