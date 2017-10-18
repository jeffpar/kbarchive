---
layout: page
title: "Q171113: XCON: Event ID 55 Incorrect Link Option"
permalink: kb/171/Q171113/
---

## Q171113: XCON: Event ID 55 Incorrect Link Option

	Article: Q171113
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When connecting Microsoft Exchange Server X.400 Connector to a remote message
	transfer agent (MTA) using 1988 mode, you may encounter the following Event ID
	logged in the Windows NT Event Viewer:
	
	  Event ID: 55
	  Source: MSExchangeMTA
	  Category: security
	
	  The incorrect link option mode was specified by the binding remote entity
	  /O=org/OU=site_name/CN=CONFIGURATION/CN=CONNECTIONS/CN=remoteMTA ,
	  association index: 2130. [MTA XFER-IN 22 35] (14)
	
	The connection will fail.
	
	CAUSE
	=====
	
	The Event ID indicates that the remote MTA is trying to negotiate a two way
	alternate link option which is not a valid option for this connection. This
	setting can be verified and changed in the X.400 Link Options check box
	selection on the Advancd tab of the X.400 Connector properties page of the
	Exchange Server Administrator program.
	
	SOLUTION
	--------
	
	Disable the two way alternate option from the remote MTA and configure it to use
	monologue.
	
	Additional query words: 55 MTA Link X.400
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
