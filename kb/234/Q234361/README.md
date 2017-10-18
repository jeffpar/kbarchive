---
layout: page
title: "Q234361: XFOR: Notes Application Connector Prompts for Password with Pas"
permalink: kb/234/Q234361/
---

## Q234361: XFOR: Notes Application Connector Prompts for Password with Pas

	Article: Q234361
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you configure the Microsoft Exchange Application Connector for Lotus
	Notes, the connector continues to prompt for the password of the Lotus Notes ID,
	even though you have configured the password in the "Set Notes Password" option
	through the Administrator program of the Application Connector.
	
	CAUSE
	=====
	
	This behavior occurs when the Lotus Notes database is not a "Local" database.
	
	WORKAROUND
	==========
	
	1. On the server running the Application Connector, start the Notes Client.
	
	2. Create a new replica of the Notes Server database locally.
	
	3. Configure replication between the Notes Server and new local replica of the
	  database file.
	
	4. Run the Application Connector against the new local replica database.
	
	5. Do not use a password on the Notes ID file.
	
	6. Run the Application Connector from the Notes Server that contains the
	  database that will be replicated to Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
