---
layout: page
title: "Q197721: XCLN: NDR When Sending A Message to A Local Recipient"
permalink: /kb/197/Q197721/
---

## Q197721: XCLN: NDR When Sending A Message to A Local Recipient

{% raw %}

	Article: Q197721
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can send a message to a local Exchange Server mailbox alone, or to an SMTP
	recipient alone, but if you send a message to an SMTP recipient and a local
	Exchange Server mailbox, you receive an non-delivery report (NDR) similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	        Subject:   testing pst
	        Sent:   9/25/98 9:51 AM
	
	  The following recipient(s) could not be reached:
	
	        {Exchange Mailbox} on 9/25/98 9:51 AM
	              The originator does not have permission to submit message
	              MSEXCH:MSExchangeIS:SITE:SERVER
	
	CAUSE
	=====
	
	The Microsoft Exchange Client or Outlook profiles include the Internet E- Mail
	service and the Microsoft Exchange Server service. The Internet E-Mail service
	is listed first on the Delivery tab, and delivery is also set to go to a .pst
	file instead of the Exchange Server mailbox.
	
	WORKAROUND
	==========
	
	To work around this problem, do one or both of the following:
	
	- Set delivery to the Exchange Server mailbox instead of a .pst file on the
	  Delivery tab in the client.
	
	- In the client, put the Microsoft Exchange Server service first in the list on
	  the Delivery tab instead of the Internet E-Mail service. If you do this, then
	  the Exchange Server computer MUST have a functional Internet Mail Service
	  installed on it, or a route to another Exchange Server computer with an
	  Internet Mail Service on it since Exchange Server will handle all outgoing
	  SMTP mail, or delivery of SMTP mail based on the configuration of the
	  Internet Mail Service. The Internet E- Mail service in the client would then
	  only be used for receiving mail from another POP3 server.
	
	Additional query words: xadm
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
