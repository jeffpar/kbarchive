---
layout: page
title: "Q167265: XADM: Missing File New Custom Recipient Option"
permalink: kb/167/Q167265/
---

## Q167265: XADM: Missing File New Custom Recipient Option

	Article: Q167265
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to set up a new Custom Recipient. This command is not available
	on the File menu in the Microsoft Exchange Server Administrator program.
	
	CAUSE
	=====
	
	You are using the standard edition of Exchange Server and you have not installed
	any Microsoft Exchange Connectors on this computer running Exchange Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Install the Microsoft Exchange Server Enterprise Edition, which includes
	  three connectors: Microsoft Exchange Internet Mail Connector, Microsoft
	  Exchange Connector, Microsoft Exchange X.400 Connector.
	
	-OR-
	
	- Install any of the connectors from the Microsoft Exchange Connector Series
	  (Microsoft Exchange Internet Mail Connector, Microsoft Exchange Connector, or
	  Microsoft Exchange X.400 Connector).
	
	- If there is no need for this Exchange Server computer to use any type of
	  connector, users can use a shared .pab file that will reside on a server.
	  This will allow users or the administrator to add foreign mail addresses to
	  be used globally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
