---
layout: page
title: "Q149021: XFOR: Delivery Receipt Request Removed by MS Mail Connector"
permalink: /kb/149/Q149021/
---

## Q149021: XFOR: Delivery Receipt Request Removed by MS Mail Connector

{% raw %}

	Article: Q149021
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Exchange users send messages to MS Mail for PC Networks users via
	the Microsoft Exchange MS Mail Connector Interchange and request a Delivery
	Receipt, the Delivery Receipt will not be sent to the MS Mail users. The MS Mail
	Connector Interchange removes the Delivery Receipt as it crosses the Connector
	because MS Mail does not use Delivery Receipts.
	
	MORE INFORMATION
	================
	
	MS Mail for PC Networks does use Read Receipts. However, the MS Mail Connector
	Interchange will not re-map the Delivery Receipt to a Read Receipt because of
	the subtle differences between a Delivery Receipt and a Read Receipt.
	
	Delivery Receipt: The sender requests a receipt when the message is delivered to
	the recipient's Inbox.
	
	Read Receipt: The sender requests a receipt when the recipient actually opens the
	message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
