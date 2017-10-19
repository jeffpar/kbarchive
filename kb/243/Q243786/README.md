---
layout: page
title: "Q243786: XADM: Directory Exception e0010006 with Parameters 4 and 1"
permalink: /kb/243/Q243786/
---

## Q243786: XADM: Directory Exception e0010006 with Parameters 4 and 1

	Article: Q243786
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The directory service may log an Event ID 1171 if internal processing diagnostic
	logging is turned up on the directory. The following error message is
	displayed:
	
	  Exception e0010006 has occurred with parameters 4 and 1 (internal ID
	  4070357). Contact Microsoft Technical Support for assistance.
	
	CAUSE
	=====
	
	This error message results from a Lightweight Directory Access Protocol (LDAP)
	search that returns more results than the maximum number of results specified in
	the LDAP properties of the server that reports the error.
	
	RESOLUTION
	==========
	
	This setting is 100 by default. You can change the setting by using the Exchange
	Server Administrator program. Click the Protocols container, click LDAP Site
	Properties, and then click Search.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
