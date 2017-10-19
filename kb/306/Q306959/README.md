---
layout: page
title: "Q306959: XCON: X.400 Connectors Not Working Between Two Exchange Servers"
permalink: /kb/306/Q306959/
---

## Q306959: XCON: X.400 Connectors Not Working Between Two Exchange Servers

	Article: Q306959
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbExchange500 kbExchange550
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two Exchange Server computers are connected with an X.400 Connector, mail
	may queue up in both X.400 queues and not flow in either direction. If the
	message transfer agent (MTA) becomes backed up while it is trying to deliver
	messages, and the transport connection is lost, the following error messages may
	appear in the Windows NT Event Viewer Application log:
	
	  Event ID: 4282
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Description: An interoperability error occurred. Interface protocol 131 was
	  violated. Error code=8453 [POP4 MAIN BASE 1 18] (14)
	
	  Event ID: 4283
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Description: Unable to recognize an internal message identifier. Internal
	  connection handle (LP1) 1-3-14 Error code=8464 [POP4 POP4 UP 5 228] (14)
	
	  Event ID: 4284
	  Category: X.400 Service Source: MSExchangeMTA
	  Description: An error has occurred during connection/disconnection. Error
	  code=8511 [POP4 POP4 DOWN 4 179] (14)
	
	  Event ID: 4287
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  Description: An internal MTA occurred. Contact Microsoft Product Support
	  Services. Error code=8650 [POP4 POP4 DOWN4 18] (14)
	
	  Event ID: 1209
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  Description: Unable to recognize an internal message identifier (LPI) from
	  entity <x.500 name>. The incorrect LPI is %1 - % 2 - %3. Control block
	  index %4.
	
	  Event ID: 1198
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  Description: An error occurred while processing an association to entity.
	  Presentation error: state check failure. Current state 0, service type 20,
	  service flavor 2 Control block index 3. The association will be terminated
	  and restarted if necessary. [PLATFORM KERNEL 27 108] (14)
	
	CAUSE
	=====
	
	This behavior can occur if you use Fully Qualified Domain Names (FQDN) or
	NetBIOS names to configure the connectors.
	
	For additional information about why this behavior can occur, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q193380 XCON: Mail Does Not Flow over X.400 Connector; Event 9301
	
	RESOLUTION
	==========
	
	To resolve this behavior, on both Exchange servers, configure the X.400
	Connector to use the IP address of the remote MTA, and then restart both MTAs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange500 kbExchange550 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
