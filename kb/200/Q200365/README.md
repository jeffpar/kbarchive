---
layout: page
title: "Q200365: XFOR:Regulating Free/Busy Updates for Selective Custom Recipient"
permalink: /kb/200/Q200365/
---

## Q200365: XFOR:Regulating Free/Busy Updates for Selective Custom Recipient

	Article: Q200365
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of network restrictions or bandwidth issues, it may not be feasible for
	the Microsoft Exchange Calendar Connector to perform a complete calendar
	synchronization for all custom recipients in the site. This article describes a
	technique to selectively update free/busy data for these custom recipients
	without generating a large amount of traffic on your network.
	
	MORE INFORMATION
	================
	
	You can create a Distribution List within the Microsoft Exchange Server
	Administrator program to represent a subset of your custom recipients. By
	creating a limited subset of custom recipients, you can stagger the free/busy
	updates and avoid a potential backlog in the network. You would simply send a
	free/busy request for that particular DL, and the Calendar Connector will then
	update the free/busy information for those users in that DL.
	
	Additional query words: network bandwidth, calendar connector, workaround
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
