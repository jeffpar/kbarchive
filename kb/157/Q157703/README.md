---
layout: page
title: "Q157703: XFOR: NDRs Sending Mail Using Email.dot"
permalink: /kb/157/Q157703/
---

## Q157703: XFOR: NDRs Sending Mail Using Email.dot

{% raw %}

	Article: Q157703
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send messages using the WordMail editor, to a recipient who is not
	defined to receive failure notifications from the Microsoft Exchange Internet
	Mail Connector (IMC), the IMC will record an error message in the Event Log
	stating that the Non-Delivery Report (NDR) could not be delivered because the
	message could not be saved. If you use a mailbox that is defined to receive IMC
	notifications, you will see a failure notice from the Microsoft Exchange System
	Administrator stating that the message was malformed.
	
	The originator will never be notified that the message was not sent.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Outlook OL97
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
