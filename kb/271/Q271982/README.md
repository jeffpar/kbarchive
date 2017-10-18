---
layout: page
title: "Q271982: XADM: Error Message: The Messaging Interface Returned Unknown..."
permalink: kb/271/Q271982/
---

## Q271982: XADM: Error Message: The Messaging Interface Returned Unknown...

	Article: Q271982
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are an administrator and you use the Move Server Wizard to migrate a
	server, users may receive the following message from the System Attendant when
	they open a message:
	
	  The messaging Interface returned unknown error. If problem persists restart
	  Outlook
	
	RESOLUTION
	==========
	
	To resolve this issue, run the following commands until the message described in
	the preceding section no longer occurs:
	
	- isinteg - fix -pub -test alltests
	
	- isinteg -fix -pri -test alltests
	
	MORE INFORMATION
	================
	
	For additional information about the Isinteg utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q182081 XADM: Description of Isinteg Utility
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
