---
layout: page
title: "Q271932: XCON: Event ID 2253: Directory Operation Failed"
permalink: kb/271/Q271932/
---

## Q271932: XCON: Event ID 2253: Directory Operation Failed

	Article: Q271932
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event may appear in the application log:
	
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: Directory Access
	  Event ID: 2253
	  Description: Directory operation (om_get) failed with no data for type
	  <number>.
	
	CAUSE
	=====
	
	The maximum diagnostic logging, which is found on the Directory Access category
	of the MTA service, is set to maximum.
	
	RESOLUTION
	==========
	
	This event can be safely ignored unless it is accompanied by other error or
	warning events, such as non-delivery reports that are generated immediately
	after this event.
	
	MORE INFORMATION
	================
	
	This event indicates that an MTA query for directory information of a certain
	type received no response from the directory. If no other events coincide with
	this event, the MTA was able to send this message successfully without the
	information requested.
	
	This condition is most likely to occur in an environment that contains gateways
	to other mail systems.
	
	Additional query words: mta ndr
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
