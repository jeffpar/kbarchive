---
layout: page
title: "Q133403: XCON: Err Msg: The Recipient Name Is Not Recognized"
permalink: /kb/133/Q133403/
---

## Q133403: XCON: Err Msg: The Recipient Name Is Not Recognized

{% raw %}

	Article: Q133403
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Server message transfer agent (MTA), the
	following nondelivery report message (NDR) is delivered to the sender when no
	address space exists for at least the address type or the address routing
	information on at least one of the Microsoft Exchange connectors:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: <Message Subject> Sent: <Date> <Time>
	
	  The following recipient(s) could not be reached:
	
	  '<Recipient's Address>' on 5/26/95 11:45:38AM The recipient name is not
	  recognized
	
	MORE INFORMATION
	================
	
	This message does not necessarily indicate that the recipient is invalid, but
	rather that the MTA does not recognize the address type as a deliverable type.
	Make sure the recipient address type is valid. You should verify that the
	address spaces for the required connector contain at least the type of address
	(X.400, SMTP, SNADS, MS, and so forth). This is done through the Address Space
	property tab of the connector responsible for routing the mail to the
	recipient.
	
	The current gateway address routing table, the Gwart0.mta file located in the
	Exchsrvr\MTAData directory, can also be viewed with a text editor to ensure that
	the type of address being used is known by the MTA service. If not, the message
	is rejected.
	
	WARNING: Although you can view Gwart0.mta with a text editor, it should never be
	modified with one. To do so may result in the MTA and/or Connectors not working
	properly. To update Gwart0.mta, open the Site Addressing Object located under
	the Site Configuration object, click on the Routing tab, then press the
	Recalculate Routing button.
	
	For more information on message routing and address spaces, consult the Microsoft
	Exchange Server "Administrator's Guide."
	
	
	Additional query words: faq transfer agent non-delivery client event id 290 msexchangemta
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
