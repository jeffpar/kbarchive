---
layout: page
title: "Q176128: XCON: Message to SMTP Address Fails with Reason 0"
permalink: /kb/176/Q176128/
---

## Q176128: XCON: Message to SMTP Address Fails with Reason 0

{% raw %}

	Article: Q176128
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to send a message to a one-off SMTP address from a Microsoft
	Mail client and the SMTP address does not exist in the Exchange Server Global
	Address List or in the user's Personal Address Book, the following non-delivery
	report (NDR) may occur:
	
	  Your Message
	  To:  <SMTP recipient name>
	  Subject: <Text of message subject line>
	
	  Was not delivered for the following reasons:
	
	  Delivery failed due to unknown address
	  Reason: 0 (transfer failed)
	  Diagnostic: -1 (no diagnostic)
	  MSEXCH:IMS:<Organization Name>:<Site Name>:<Server Name> No proxy for
	  Recipient
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	If the one-off address is found as a proxy address in the Exchange Server Global
	Address List or the user's local PAB, the message will be delivered without
	failure.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
