---
layout: page
title: "Q262116: XCON: How Exchange Server 5.5 Routes Custom Recipient Messages I"
permalink: /kb/262/Q262116/
---

## Q262116: XCON: How Exchange Server 5.5 Routes Custom Recipient Messages I

	Article: Q262116
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Exchange Server 5.5 routes custom recipient messages
	internally.
	
	MORE INFORMATION
	================
	
	When you send an e-mail message to a custom recipient address, the directory
	places the default address in the custom recipient address X.400 proxy address
	as a domain-defined attribute (DDA).
	
	For example, if a custom recipient that has a default Simple Mail Transfer
	Protocol (SMTP) address of "someone@microsoft.com" has the following X.400 proxy
	address
	
	  C=us;a= ;p=Org;o=Site;s=Someone;g=MsGuy
	
	when you send an e-mail message to that custom recipient that has a default SMTP
	address of someone@microsoft.com, the message is routed as follows, and is
	routed by DDA first:
	
	  C=us;a= ;p=Org;o=Site;s=Someone;g=MsGuy;dda=SMTP:someone@microsoft.com
	
	If the message transfer agent (MTA) cannot find a route, the MTA routes on the
	X.400 address. In some cases the custom recipient address is routed to an X.400
	connector with a "C=*" address space.
	
	Typically, the message loops when the message is rerouted back to the originating
	site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
