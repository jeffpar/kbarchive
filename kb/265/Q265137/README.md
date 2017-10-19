---
layout: page
title: "Q265137: XFOR: Cannot Install Connector MTA on MS Mail Connector"
permalink: /kb/265/Q265137/
---

## Q265137: XFOR: Cannot Install Connector MTA on MS Mail Connector

	Article: Q265137
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to create a Microsoft Mail (MS Mail) Connector between Exchange
	Server and an MS Mail postoffice, when you configure the Exchange Server
	properties for the MS Mail Connector on the connector message transfer agent
	(MTA) page under Postoffices Serviced and click Apply, you may receive the
	following error message
	
	  The connector MTA instance <name_of_MTA> could not be created.
	
	where <name_of_MTA> is the name of the connector MTA that you entered.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Stop Simple Network Management Protocol (SNMP) and all third-party services,
	  and then restart the server.
	
	2. Insert the Exchange Server CD-ROM and run Exchange Server Setup.
	
	3. Click Add/Remove.
	
	4. Click Microsoft Exchange Server, and then click Change Option.
	
	5. Click to clear the MS Mail Connector check box, and then click OK.
	
	6. Click Continue to resume the Setup program and remove the MS Mail Connector.
	
	7. Restart Exchange Server Setup and reinstall the MS Mail Connector.
	
	8. Reapply any Exchange Server service pack and fixes.
	
	9. Reconfigure the MS Mail Connector.
	
	Additional query words: PCMTA; CONNECTOR MTA
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
