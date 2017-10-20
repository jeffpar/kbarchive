---
layout: page
title: "Q255024: XCON: SMTP Addresses Can Be Encapsulated in RFC-822 DDA"
permalink: /kb/255/Q255024/
---

## Q255024: XCON: SMTP Addresses Can Be Encapsulated in RFC-822 DDA

{% raw %}

	Article: Q255024
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If an Exchange Server user sends a message to an SMTP recipient over an X.400
	Connector to an X.400 recipient, when the X.400 recipient opens the message, the
	SMTP recipient's address is displayed as the X.400 address of the server that
	created the X.400 address, and the following two Domain Defined Attributes
	(DDAs) are displayed:
	
	- MSXENCAP=SMTP
	
	- SMTP="<address_of_SMTP_recipient>"
	
	If the X.400 recipient is not on an Exchange Server system, the system may expect
	SMTP addresses to be encapsulated in a single DDA, of Request for Comments
	(RFC)-822 type. It is now possible to configure Exchange Server to use the
	RFC-822 method of encapsulation. For additional information about the latest
	service pack for Exchange Server 5.5, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest the latest Exchange Server 5.5 Service
	  Pack
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	You can configure this feature on a single X.400 Connector:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	  NOTE: Change the path if necessary
	
	2. Under Organization, click Site, click Configuration, and then click the
	  Connections container.
	
	3. In the right window, click the X.400 Connector that you want to configure to
	  encapsulate SMTP addresses in the RFC-822 DDA.
	
	4. On the File menu, click Raw Properties.
	
	5. Under "List attributes of type", click All. Under "Object attributes", click
	  Heuristics.
	
	6. In the "Edit value" box, type "536870912" (without the quotation marks).
	  (This is the decimal equivalent of 0x20000000.)
	
	  NOTE: If the Heuristics attribute already has a value, add 536870912 to the
	  existing value.
	
	7. Click Set, and then click OK.
	
	8. Stop and restart the Exchange Server Message Transfer Agent (MTA) service.
	
	9. Test the MTA service.
	
	The X.400 Connector encapsulates SMTP addresses by using the RFC-822 DDA.
	
	Additional query words: MIXER RFC2156
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
