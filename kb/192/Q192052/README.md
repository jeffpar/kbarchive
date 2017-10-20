---
layout: page
title: "Q192052: XFOR: MSMI: Messages with Incomplete X.400 Addresses are NDR"
permalink: /kb/192/Q192052/
---

## Q192052: XFOR: MSMI: Messages with Incomplete X.400 Addresses are NDR

{% raw %}

	Article: Q192052
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages sent from a foreign system to an MS Mail user via the MS Mail Connector
	of an Exchange Server computer are not valid address types for reply when they
	are received at the MS Mail postoffice. Foreign address types are any address
	type that the MS Mail postoffice does not have a gateway or access component
	installed for routing.
	
	CAUSE
	=====
	
	When the MS Mail Connector receives a message with a foreign address type, it
	will convert the address to an X.400 address with DDA (domain defined attribute)
	type and DDA value. The problem is that the X.400 address does not include the
	GDI (Global Domain Identifier) from the Exchange Server computer. When a client
	replies to the address, the MS Mail Connector will generate an non-delivery
	report back to the client as a non-routable address.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
