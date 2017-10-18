---
layout: page
title: "Q259196: XADM: Directory Replication Agent Option Values"
permalink: kb/259/Q259196/
---

## Q259196: XADM: Directory Replication Agent Option Values

	Article: Q259196
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a directory replication agent (DRA) requests directory replication, the DRA
	specifies the options criteria for the request. When you increase diagnostic
	logging for replication, you can see these options by reviewing event ID 1068 in
	the application event log.
	
	MORE INFORMATION
	================
	
	When you increase diagnostic logging for replication, the following event ID
	1068 is logged in the application event log:
	
	  Event Type: Information
	  Event Source: MSExchangeDS
	  Event Category: Replication
	  Event ID: 1068
	  Description:
	  Internal event: The directory replication agent (DRA) was asked to synchronize
	  replica of /o=Organization/ou=Site/cn=Configuration from directory ID ServerA
	  with options 4051.
	
	The following table provides descriptions for the most common option values.
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Option Value | Description                                                                                                                                               | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 3            | Normal intrasite replication                                                                                                                              | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4000         | Manually invoked request updates                                                                                                                          | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4041         | Normal replication for bridgehead servers, or downstream servers requesting updates for remote site naming contexts from the local bridgehead in the site | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4051         | "Backup" replication cycle                                                                                                                                | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| c000         | Manually invoked request all objects                                                                                                                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 904041       | Replication invoked by a restart of the Exchange Server directory service                                                                                 | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
