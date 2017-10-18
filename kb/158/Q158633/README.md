---
layout: page
title: "Q158633: XFOR: MTA Admin View of Queues Explained"
permalink: kb/158/Q158633/
---

## Q158633: XFOR: MTA Admin View of Queues Explained

	Article: Q158633
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the Microsoft Exchange Message Transfer Agent (MTA) queues using
	the Microsoft Exchange Administrator program, you might see a list of queues
	that may not be self-explanatory. This article describes the various queues and
	what they are.
	
	MORE INFORMATION
	================
	
	You can display the MTA queues by selecting the Server object, then the MTA
	object on the right-hand pane, viewing it's properties, and then selecting the
	Queue tab.
	
	Here is what can be displayed:
	
	- Directory Service - Incoming replication messages for the local Directory
	  service. Only seen on the Bridgehead Server in a inter-Site configuration.
	
	  Note: Intra-site replication is RPC based and fully managed by the Directory
	  service. There is no MTA intervention.
	
	- Internet Mail Connector - Outgoing SMTP messages.
	
	- Private Information Store - Incoming mail for local mailboxes.
	
	- Public Information Store - Incoming replication messages from other Servers
	  in the Organization.
	
	- X400 Connectors (Represented by the display name of the connector) - Outgoing
	  X.400 or other type of inter-site mail.
	
	- Dynamic RAS Connectors (Represented by the display name of the connector) -
	  Outgoing inter-site mail.
	
	- Other Servers in the same Site - Outgoing mail to other Servers in the same
	  Site.
	
	- Servers serviced by a Site Connector - Outgoing mail to target Servers served
	  by a Site connector.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
