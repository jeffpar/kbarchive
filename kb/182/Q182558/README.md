---
layout: page
title: "Q182558: XADM: Sending To A Mailbox With An Invalid Alternate Recipient"
permalink: /kb/182/Q182558/
---

## Q182558: XADM: Sending To A Mailbox With An Invalid Alternate Recipient

{% raw %}

	Article: Q182558
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a non-delivery report (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   Subject of the Message
	     Sent:   3/11/98 12:26 AM
	
	  The following recipient(s) could not be reached:
	
	     Recipient Name on 3/11/98 12:26 AM
	     The recipient name is not recognized
	     MSEXCH:MSExchangeMTA:SITENAME:SERVERNAME
	
	CAUSE
	=====
	
	This problem can occur when you send a message to a mailbox that has an invalid
	alternate recipient.
	
	WORKAROUND
	==========
	
	To check for an alternate recipient, locate the mailbox to which you are sending
	the message. Check properties on that mailbox. The alternate recipient
	configuration is located on the Delivery Options property page.
	
	Try sending a message to the alternate recipient's address to verify that the
	address is valid.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
