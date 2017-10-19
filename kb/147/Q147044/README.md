---
layout: page
title: "Q147044: XFOR: Using the IMC and AT&amp;T Easylink Gateway Together"
permalink: /kb/147/Q147044/
---

## Q147044: XFOR: Using the IMC and AT&amp;T Easylink Gateway Together

	Article: Q147044
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Microsoft Exchange to route Internet mail
	to the Microsoft Exchange Internet Mail Connector (IMC) and mail destined for
	the AT&T Easylink gateway to the Microsoft Mail Connector.
	
	MORE INFORMATION
	================
	
	To set up the above routing, the Microsoft Exchange Administrator needs to add
	the following Address Space entries, using the Microsoft Exchange Administrator
	program.
	
	1. On the Address Space property page of the Internet Mail Connector Properties,
	  click New Internet to add a new SMTP type address space entry. Type "*!*@*"
	  (without the quotation marks) for the E-mail domain and set the cost to 1.
	  Click New Internet to add a new SMTP type address space and leave the entry
	  blank for the E-Mail domain and set the cost to 1. The IMC is not a UUCP
	  gateway and therefore will not support '!' addressing, However, address in
	  the type user!host@host is a valid SMTP address.
	
	2. On the Address Space property page of the Microsoft Mail Connector
	  Properties, click New Internet to add a new SMTP type address space entry.
	  Type "*!*" (without the quotation marks) for the E-mail domain and set the
	  cost to 2.
	
	3. Stop and restart the Microsoft Exchange MTA, IMC and Microsoft Mail Connector
	  services.
	
	The above steps will cause all messages addressed to the AT&T Gateway to be
	sent to the Microsoft Mail Connector. Messages addressed to all other addresses
	of type "SMTP" will be sent out the IMC.
	
	Results
	-------
	
	user!host!host!host ---> MS Mail Connector
	user@host!host!host----> MS Mail Connector
	user!host@host---------> Internet Mail Connector
	user@host--------------> Internet Mail Connector
	
	NOTE: Please refer to the Microsoft Exchange Administrator's Guide for more
	information on setting up the AT&T Easylink gateway to provide service
	between Microsoft Exchange Server and the AT&T system.
	
	Additional query words: ATT
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
