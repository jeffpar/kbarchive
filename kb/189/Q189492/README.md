---
layout: page
title: "Q189492: XFOR: IMCEASMTP-swadmin+40corporate+2ecom@&#42; in NDR Message"
permalink: /kb/189/Q189492/
---

## Q189492: XFOR: IMCEASMTP-swadmin+40corporate+2ecom@&#42; in NDR Message

{% raw %}

	Article: Q189492
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange client sends a message, it may receive the following non-
	delivery report (NDR):
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   Test Message
	     Sent:   11/3/97 12:03 PM
	
	  The following recipient(s) could not be reached:
	
	     IMCEASMTP-swadmin+40corporate+2Ecom@* on 11/3/97 12:03 PM
	        The recipient name is not recognized
	        MSEXCH:IMC:Microsoft:CIRCUS:CLOWNS 3553 553 malformed address:
	           IMCEASMTP-swadmin+40corporate+2Ecom@*
	
	The e-mail was sent to [smtp:swadmin@corporate.com] Notice the "*" at the end of
	the address line.
	
	CAUSE
	=====
	
	This can happen if an incorrect routing entry of asterisk (*) exists in the
	Address Space property page of the Internet Mail Service (Internet Mail
	Connector in version 4.0).
	
	WORKAROUND
	==========
	
	To workaround this problem:
	
	1. In the Microsoft Exchange Administrator program, check for the incorrect
	  entry by double-clicking on the Internet Mail Service and select the Address
	  Space tab.
	
	2. Look for the Address Entry to which your message would have been routed. If
	  you don't know which address entry was used to deliver the message, then
	  check all of the Address Entries. To inspect the address entries,
	  double-click on each entry. This will bring up the SMTP Properties dialog box
	  with the following tabs: a General tab containing the E-mail Domain and Cost,
	  and a Routing tab containing Type and Address.
	
	3. Inspect the Routing tab. If it includes an asterisk (*), then delete the Type
	  and Address entries.
	
	This should fix the problem.
	
	MORE INFORMATION
	================
	
	The address that the client is sending to is being encapsulated by the Internet
	Mail Service.
	
	In the non-delivery report returned to the client, the at symbol (@) was
	converted to its hexadecimal format (40) and the dot (.), to the hexadecimal
	(2e). Then the Internet Mail Service takes the converted address and appends an
	asterisk (*) that it gets from the Routing tab.
	
	Normally, the Internet Mail Service will be configured with an Address space
	entry of:
	
	  SMTP                      *                    1.
	
	Double-clicking this entry will reveal the General tab settings to be:
	
	  E-mail domain    *
	  Cost                  1
	
	The Routing tab entries will be blank:
	
	  Type
	  Address
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
