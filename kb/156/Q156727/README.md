---
layout: page
title: "Q156727: XCON: WAN Drive Functionality of PC Connector and ISDN Lines"
permalink: kb/156/Q156727/
---

## Q156727: XCON: WAN Drive Functionality of PC Connector and ISDN Lines

	Article: Q156727
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Knowledge Base article Q140186 describes how to configure the
	Microsoft Exchange MS Mail Connector (PC) MTA to have WAN drive functionality.
	However the Microsoft Exchange PC Mail connector does not completely silence the
	connection to the remote Postoffice (PO). A network trace shows SMB traffic
	between Microsoft Exchange and the remote PO. The MS Mail Connector service
	verifies that the link is alive by performing a directory listing at the
	interval specified by the Check for Mail Every option. However, with the Do not
	Pick Up Mail at This Postoffice option checked, the service should only connect
	to the remote PO when there is mail to send from Microsoft Exchange. This can
	mean problems for customers who use ISDN lines because the line will stay active
	continuously.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
