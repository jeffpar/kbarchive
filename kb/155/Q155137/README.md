---
layout: page
title: "Q155137: XFOR: Messages Not Deleted from IMC Inbound Queue"
permalink: /kb/155/Q155137/
---

## Q155137: XFOR: Messages Not Deleted from IMC Inbound Queue

{% raw %}

	Article: Q155137
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inbound messages bound for Microsoft Mail Custom Recipients may not be deleted
	from the Microsoft Exchange Internet Mail Connector(IMC) "Inbound Messages
	Awaiting Delivery" queue.
	
	The details, delete, and refresh buttons have no effect on these messages.
	
	CAUSE
	=====
	
	When IMC hands the store a message envelope to be delivered, if the recipient is
	not recognized as a valid one, the store hands this to the spooler queue, the
	way it does for all regular users. But this behavior is incorrect when the
	sender is a gateway. Gateways do not have spoolers and the store should never
	put any message submitted by a gateway in the spooler queue.
	
	WORKAROUND
	==========
	
	The messages can be deleted by following the instructions in the following
	article in the Microsoft Knowledge base:
	
	  Q165505 XFOR: How to View/Delete Messages in MTS-IN and MTS-OUT Queues
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this fix, the refresh button does not refresh the IMC "Inbound Messages
	Awaiting Delivery" queue properly for this type of message. Normally, in the IMC
	queue property page, the messages can manually be deleted and refresh can be
	used to remove messages that have been delivered, but not deleted. A scavenger
	thread cleans up otherwise. With this fix you have to wait for that scavenger
	thread to execute to delete the messages.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
